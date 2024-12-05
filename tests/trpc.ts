import { initTRPC } from '@trpc/server'
import { createAuthenticationRouter, createDefaultAuthenticationModuleRouter } from '@universal-packages/trpc-authentication'

export const trpc = initTRPC.create()

export const appRouter = trpc.mergeRouters(createAuthenticationRouter(trpc), createDefaultAuthenticationModuleRouter(trpc))
