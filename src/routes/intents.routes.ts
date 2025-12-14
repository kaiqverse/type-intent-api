import { FastifyPluginAsync } from 'fastify'
import * as controller from '../controllers/intents.controller'

export const intentsRoutes: FastifyPluginAsync = async (app) => {
  app.post('/', controller.create)
  app.get('/', controller.list)
  app.get('/:id', controller.getById)
  app.patch('/:id/status', controller.updateStatus)
}