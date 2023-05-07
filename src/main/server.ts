import 'module-alias/register'
import { env } from '@/main/config/env'

async function initApp(): Promise<unknown> {
  const { setupApp } = await import('./config/app')
  const app = await setupApp()
  return app.listen(env.port, () => console.log(`Server started at Port ${env.port}`))
}

initApp()
