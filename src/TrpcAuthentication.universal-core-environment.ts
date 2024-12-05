import { CoreEnvironment } from '@universal-packages/core'
import { initialize } from '@universal-packages/trpc-authentication'

export default class TrpcAuthenticationEnvironment extends CoreEnvironment {
  public afterModulesLoad() {
    if (global.authenticationSubject) {
      initialize(global.authenticationSubject)
    }
  }
}
