import type { AeroSyncWebVersionsKey } from '~/interfaces/widget.interface'
import { onUnmounted, ref } from 'vue'

interface CdnLoaderOptions {
  version: AeroSyncWebVersionsKey
  onLoad?: () => void
  onError?: (error: Event) => void
}

export function useCdnLoader() {
  const isLoading = ref(false)
  const isLoaded = ref(false)
  const error = ref<string | null>(null)
  const loadedScripts = new Set<string>()

  const loadCdnScript = async (options: CdnLoaderOptions): Promise<void> => {
    const { version, onLoad, onError } = options
    // convert version to display version
    const semanticVersion = `v${version.replace('v', '').split('').join('.')}`
    const scriptSrc = `/cdn/aerosync-widget-${semanticVersion}.js`

    // Check if script is already loaded
    if (loadedScripts.has(scriptSrc)) {
      isLoaded.value = true
      onLoad?.()
      return
    }

    // Check if script already exists in DOM
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`)
    if (existingScript) {
      isLoaded.value = true
      loadedScripts.add(scriptSrc)
      onLoad?.()
      return
    }

    isLoading.value = true
    error.value = null

    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = scriptSrc
      script.type = 'text/javascript'
      script.async = true

      script.onload = () => {
        isLoading.value = false
        isLoaded.value = true
        loadedScripts.add(scriptSrc)
        onLoad?.()
        resolve()
      }

      script.onerror = (event) => {
        isLoading.value = false
        error.value = `Failed to load script: ${scriptSrc}`
        onError?.(event)
        reject(new Error(error.value))
      }

      // Append script to head
      document.head.appendChild(script)
    })
  }

  const removeScript = (version: string) => {
    const scriptSrc = `/cdn/aerosync-widget-v${version}.js`
    const script = document.querySelector(`script[src="${scriptSrc}"]`)

    if (script) {
      script.remove()
      loadedScripts.delete(scriptSrc)

      // Reset state if this was the currently loaded script
      if (isLoaded.value) {
        isLoaded.value = false
      }
    }
  }

  const clearAllScripts = () => {
    loadedScripts.forEach((scriptSrc) => {
      const script = document.querySelector(`script[src="${scriptSrc}"]`)
      if (script) {
        script.remove()
      }
    })
    loadedScripts.clear()
    isLoaded.value = false
    isLoading.value = false
    error.value = null
  }

  // Cleanup on component unmount
  onUnmounted(() => {
    // Optionally clear scripts on unmount - uncomment if needed
    // clearAllScripts()
  })

  return {
    isLoading: readonly(isLoading),
    isLoaded: readonly(isLoaded),
    error: readonly(error),
    loadCdnScript,
    removeScript,
    clearAllScripts,
  }
}
