import { Intent } from '../models/intent.model'

const intents = new Map<string, Intent>()

export const IntentStore = {
  save(intent: Intent) {
    intents.set(intent.id, intent)
  },

  get(id: string) {
    return intents.get(id)
  },

  list() {
    return Array.from(intents.values())
  },

  update(id: string, data: Partial<Intent>) {
    const intent = intents.get(id)
    if (!intent) return null

    const updated = { ...intent, ...data }
    intents.set(id, updated)
    return updated
  }
}