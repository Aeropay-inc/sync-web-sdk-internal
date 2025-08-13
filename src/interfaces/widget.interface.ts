export interface WidgetConfigType {
  token: string
  environment: string
  configurationId: string
  aeroPassUserUuid: string
  isEmbeddedFlow: boolean
  sdkVersion: AeroSyncWebVersionsKey
  handleMFA: boolean
  widgetLaunchType: WidgetLaunchType
  CDN: boolean
  jobId: string
  connectionId: string
}

export type AeroSyncWebVersionsKey = 'v113' | 'v212' | 'v214'
export type AeroSyncWebVersionsDisplay = 'v1.1.3' | 'v2.1.2' | 'v2.1.4'

export type WidgetLaunchType = 'host' | 'systemBrowser'

export type Environment = 'qa' | 'staging' | 'sandbox' | 'production'
export type EnvironmentV110 = 'dev' | 'staging' | 'sandbox' | 'production'

export interface AeroSyncWebVersions {
  key: AeroSyncWebVersionsKey
  display: AeroSyncWebVersionsDisplay
}
