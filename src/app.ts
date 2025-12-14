import Fastify from 'fastify'
import { authPlugin } from './plugins/auth'
import { healthRoutes } from './routes/health.routes'
import { intentsRoutes } from './routes/intents.routes'

export function buildApp() {
  const app = Fastify({ logger: true })

  app.register(authPlugin)
  app.register(healthRoutes)
  app.register(intentsRoutes, { prefix: '/intents' })

  return app
}