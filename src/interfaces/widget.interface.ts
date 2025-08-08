export interface WidgetConfigType {
  token: string
  environment: string
  configurationId: string
  aeroPassUserUuid: string
  isEmbeddedFlow: boolean
  sdkVersion: AeroSyncWebVersionsKey
  handleMFA: boolean
  jobId: string
  connectionId: string
}

type AeroSyncWebVersionsKey = 'v113' | 'v212'
type AeroSyncWebVersionsDisplay = 'v1.1.3' | 'v2.1.2'

export type Environment = 'qa' | 'staging' | 'sandbox' | 'production'
export type EnvironmentV110 = 'dev' | 'staging' | 'sandbox' | 'production'

export interface AeroSyncWebVersions {
  key: AeroSyncWebVersionsKey
  display: AeroSyncWebVersionsDisplay
}
