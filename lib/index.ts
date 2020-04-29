import BlurHash from './BlurHash.vue'
import BlurHashCanvas from './BlurHasCanvas.vue'
import BlurHashImage from './BlurHashImage.vue'

const plugin = {
  install(Vue, options) {
    Vue.component('blur-hash-image', BlurHashImage)
    Vue.component('blur-hash', BlurHash)
    Vue.component('blur-hash-canvas', BlurHashCanvas)
  }
}

export default plugin
export {
  BlurHash,
  BlurHashCanvas,
  BlurHashImage
}