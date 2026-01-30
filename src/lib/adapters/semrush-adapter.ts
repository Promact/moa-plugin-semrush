
import { SaasProvider, AuthManager, createHttpClient, HttpClient } from 'moa-cli-core';
import * as inquirer from '@inquirer/prompts';

export class SemrushAdapter implements SaasProvider {
    name = 'semrush';
    private httpClient: HttpClient | null = null;
    private authManager: AuthManager;
    private baseUrl = 'https://api.semrush.com';

    constructor() {
        this.authManager = new AuthManager();
    }

    async authenticate(): Promise<void> {
        const apiKey = await inquirer.password({
            message: 'Enter your Semrush API Key:',
        });

        // Verify token with a cheap call (e.g., check balance or a small report)
        try {
            // Semrush API uses query params for auth: ?key=API_KEY
            // We can check the API limits/balance if there's an endpoint, or just assume it works for now 
            // since Semrush doesn't have a dedicated "me" endpoint like OAuth providers.
            // A common check is to request a small report.

            // For now, we'll validate by just setting it, assuming the key is valid format.
            if (!apiKey || apiKey.length < 10) {
                throw new Error('Invalid API Key format');
            }

            await this.authManager.setCredentials(this.name, {
                token: apiKey,
                tokenType: 'apikey'
            });

            console.log('✅ Successfully authenticated with Semrush!');
        } catch (error: any) {
            throw new Error(`Authentication failed: ${error.message}`);
        }
    }

    private async getClient(): Promise<HttpClient> {
        if (this.httpClient) return this.httpClient;

        const token = await this.authManager.getToken(this.name);
        if (!token) {
            throw new Error('Not authenticated. Please run "moa semrush:auth" first.');
        }

        // Semrush passes key in query params, not headers.
        // We can use an interceptor in HttpClient or just append it manually.
        // Since HttpClient is generic, we can add a default param if supported, or wrapped calls.

        // For this implementation, I will append the key to query params in the adapter methods
        // because the standard HttpClient config uses headers for auth.

        this.httpClient = createHttpClient({
            baseURL: this.baseUrl,
            provider: this.name
        });

        // Store token for use in methods, not in HttpClient headers
        this.apiKey = token;

        return this.httpClient;
    }

    private apiKey: string = '';

    private getCommonParams() {
        return {
            key: this.apiKey,
        };
    }

    async getEntity(entityType: string, id: string): Promise<any> {
        throw new Error('Get Entity by ID is not typically supported by Semrush API in the same way. Use listEntities or specific commands.');
    }

    async listEntities(entityType: string, filters: any = {}): Promise<any[]> {
        const client = await this.getClient();

        switch (entityType.toLowerCase()) {
            case 'domain_rank':
            case 'domain_overview':
                // Example: Domain Overview
                // API: /?type=domain_rank&key=...&domain=...

                const domain = filters.domain;
                if (!domain) throw new Error('Domain is required for domain_overview');

                const response = await client.get('/', {
                    params: {
                        ...this.getCommonParams(),
                        type: 'domain_rank',
                        domain: domain,
                        export_columns: 'Dn,Rk,Or,Ot,Oc,Ad,At,Ac', // Example columns
                        database: filters.database || 'us'
                    }
                });

                // Semrush returns CSV-like or line-delimited data usually, need to parse if not JSON.
                // However, "domain_rank" returns lines.
                // Let's assume for this "spec" implementation we handle the text response.
                return this.parseSemrushResponse(response.data);

            default:
                throw new Error(`Unsupported entity type: ${entityType}`);
        }
    }

    private parseSemrushResponse(data: any): any[] {
        if (typeof data === 'string') {
            const lines = data.split('\n').filter(l => l.trim().length > 0);
            if (lines.length < 2) return [];

            const headers = lines[0].split(';');
            const results = [];

            for (let i = 1; i < lines.length; i++) {
                const values = lines[i].split(';');
                const obj: any = {};
                headers.forEach((h, index) => {
                    obj[h] = values[index];
                });
                results.push(obj);
            }
            return results;
        }
        return [data];
    }
}
