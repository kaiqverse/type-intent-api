import { FastifyRequest } from 'fastify'
import { IntentService } from '../services/intents.service'
import { IntentStatus } from '../models/intent.model'

export async function create(req: FastifyRequest) {
  const body = req.body as {
    deviceId: string
    action: string
    resource: string
  }

  return IntentService.create(body.deviceId, body.action, body.resource)
}

export async function list() {
  return IntentService.list()
}

export async function getById(req: FastifyRequest) {
  const { id } = req.params as { id: string }
  return IntentService.get(id)
}

export async function updateStatus(req: FastifyRequest) {
  const { id } = req.params as { id: string }
  const body = req.body as { status: IntentStatus }

  return IntentService.updateStatus(id, body.status)
}