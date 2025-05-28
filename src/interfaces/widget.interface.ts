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

type AeroSyncWebVersionsKey = 'v110' | 'v111' | 'v204' | 'v205'
type AeroSyncWebVersionsDisplay = 'v1.1.0' | 'v1.1.1' | 'v2.0.4' | 'v2.0.5'

export type Environment = 'qa' | 'staging' | 'sandbox' | 'production'
export type EnvironmentV110 = 'dev' | 'staging' | 'sandbox' | 'production'

export interface AeroSyncWebVersions {
  key: AeroSyncWebVersionsKey
  display: AeroSyncWebVersionsDisplay
}
