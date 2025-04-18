import type { AerosyncEnvironment } from 'aerosync-web-sdk'

export interface WidgetConfigType {
  token: string
  environment: AerosyncEnvironment
  configurationId: string
  aeroPassUserUuid: string
}
