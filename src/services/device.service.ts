type Device = {
  id: string;
  name: string;
  apiKey: string;
};

const devices: Device[] = [
  {
    id: "dev-1",
    name: "Test Device",
    apiKey: "test-api-key-123"
  }
];

export function findDeviceByApiKey(apiKey: string): Device | null {
  return devices.find(d => d.apiKey === apiKey) || null;
}