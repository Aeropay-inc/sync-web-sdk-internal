export interface WidgetConfigType {
  token: string
  environment: string
  configurationId: string
  aeroPassUserUuid: string
  isEmbeddedFlow: boolean
  sdkVersion: AeroSyncWebVersionsKey
}

type AeroSyncWebVersionsKey = 'v110' | 'v111' | 'v204'
type AeroSyncWebVersionsDisplay = 'v1.1.0' | 'v1.1.1' | 'v2.0.4'

export interface AeroSyncWebVersions {
  key: AeroSyncWebVersionsKey
  display: AeroSyncWebVersionsDisplay
}
