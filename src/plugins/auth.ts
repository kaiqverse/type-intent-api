import { FastifyPluginAsync } from 'fastify'
import { ENV } from '../config/env'

export const authPlugin: FastifyPluginAsync = async (app) => {
  app.addHook('preHandler', async (req, reply) => {
    if (!req.url.startsWith('/intents')) return

    const apiKey = req.headers['x-api-key']
    if (apiKey !== ENV.API_KEY) {
      reply.code(401)
      throw new Error('Invalid API key')
    }
  })
}