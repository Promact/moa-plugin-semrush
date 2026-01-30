
import { Args, Command, Flags } from '@oclif/core'
import { SemrushAdapter } from '../../lib/adapters/semrush-adapter.js'

export default class SemrushDomainOverview extends Command {
    static description = 'Get Domain Overview from Semrush'

    static examples = [
        '<%= config.bin %> <%= command.id %> example.com --database=us',
    ]

    static args = {
        domain: Args.string({ description: 'Domain name to analyze', required: true }),
    }

    static flags = {
        database: Flags.string({ char: 'd', description: 'Semrush Database (us, uk, fr, etc.)', default: 'us' }),
    }

    public async run(): Promise<void> {
        const { args, flags } = await this.parse(SemrushDomainOverview)

        const adapter = new SemrushAdapter()
        try {
            const results = await adapter.listEntities('domain_rank', {
                domain: args.domain,
                database: flags.database,
            })

            if (results.length === 0) {
                this.log('No results found.')
                return
            }

            console.table(results)
        } catch (error: any) {
            this.error(error.message)
        }
    }
}
