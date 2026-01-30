
import { Command } from '@oclif/core'
import { SemrushAdapter } from '../../lib/adapters/semrush-adapter.js'

export default class SemrushAuth extends Command {
    static description = 'Authenticate with Semrush'

    static examples = [
        '<%= config.bin %> <%= command.id %>',
    ]

    public async run(): Promise<void> {
        const adapter = new SemrushAdapter()
        try {
            await adapter.authenticate()
            this.log('Authentication setup complete.')
        } catch (error: any) {
            this.error(error.message)
        }
    }
}
