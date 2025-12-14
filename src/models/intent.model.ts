export type IntentStatus = 'PENDING' | 'ACK' | 'DONE' | 'FAILED'

export interface Intent {
  id: string
  deviceId: string
  action: string
  resource: string
  status: IntentStatus
  createdAt: string
}