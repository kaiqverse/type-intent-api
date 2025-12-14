import { Intent, IntentStatus } from '../models/intent.model'
import { IntentStore } from '../store/intents.store'
import { generateId } from '../utils/id'

export const IntentService = {
  create(deviceId: string, action: string, resource: string): Intent {
    const intent: Intent = {
      id: generateId(),
      deviceId,
      action,
      resource,
      status: 'PENDING',
      createdAt: new Date().toISOString()
    }

    IntentStore.save(intent)
    return intent
  },

  list() {
    return IntentStore.list()
  },

  get(id: string) {
    return IntentStore.get(id)
  },

  updateStatus(id: string, status: IntentStatus) {
    return IntentStore.update(id, { status })
  }
}