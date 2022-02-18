import { listenMockRestServer } from '@/mocks/rest'
import { listenMockGraphqlServer } from '@/mocks/graphql'

type SelectMockServer = 'rest' | 'graphql'

export const selectMockServer = (selectServer: SelectMockServer) => {
  if (selectServer === 'rest') {
    listenMockRestServer()
  } else {
    listenMockGraphqlServer()
  }
}
