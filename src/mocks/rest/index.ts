import { setupWorker, StartOptions } from 'msw'
import { setupServer } from 'msw/node'
import { handlers } from '@/mocks/rest/handlers'

const options: StartOptions = {
  onUnhandledRequest: 'bypass',
  quiet: true,
}

export const listenMockRestServer = () => {
  if (typeof window === 'undefined') {
    const server = setupServer(...handlers)
    server.listen(options)
  } else {
    const worker = setupWorker(...handlers)
    worker.start(options)
  }
}
