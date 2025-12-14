import { FastifyPluginAsync } from 'fastify'

export const healthRoutes: FastifyPluginAsync = async (app) => {
  app.get('/', async () => ({ status: 'up' }))

  app.get('/health', async () => ({
    status: 'ok',
    uptime: process.uptime()
  }))
}