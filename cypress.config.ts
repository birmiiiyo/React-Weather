import { defineConfig } from 'cypress'
import { cypressBrowserPermissionsPlugin } from 'cypress-browser-permissions'

export default defineConfig({
  projectId: 'ymqfda',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      config = cypressBrowserPermissionsPlugin(on, config)
    },
    env: {
      browserPermissions: {
        geolocation: 'allow',
      },
    },
  },
})
