import crypto from 'crypto'

export function generateId() {
  return crypto.randomUUID()
}
