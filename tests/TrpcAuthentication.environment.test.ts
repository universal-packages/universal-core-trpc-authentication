import { TrpcAuthenticationEnvironment } from '../src'
import { appRouter } from './trpc'

coreJest.runBare({
  coreConfigOverride: {
    config: { location: './tests/__fixtures__/config' },
    environments: { location: './tests/__fixtures__' },
    logger: { silence: true }
  }
})

trpcJest.runTrpcServer(appRouter, { user: { id: 99 } })

describe(TrpcAuthenticationEnvironment, (): void => {
  it('initializes trpc under the hud using the authentication module', async (): Promise<void> => {
    expect(await trpcJest.client(appRouter).me.query()).toEqual({ status: 'success', user: { id: 99 } })
  })
})
