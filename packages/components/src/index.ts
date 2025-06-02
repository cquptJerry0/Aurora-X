import type { App, Plugin } from 'vue'
import Attachments from './components/Attachments/index.vue'
import Bubble from './components/Bubble/index.vue'
import BubbleList from './components/BubbleList/index.vue'
import Config from './components/Config/index.vue'
import Typewriter from './components/Typewriter/index.vue'

export * from './components'
export * from './hooks'
export * from './utils'

const AuroraX: Plugin = {
  install(app: App) {
    app.component('Attachments', Attachments)
    app.component('Bubble', Bubble)
    app.component('BubbleList', BubbleList)
    app.component('Config', Config)
    app.component('Typewriter', Typewriter)
  }
}

export default AuroraX