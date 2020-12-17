<template>
  <div style="position: relative;" :style="[{ paddingBottom: computedRatio }, cssVars]">
    <transition-group mode="in-out" name="fade" style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
      <blur-hash-canvas :hash="hash" :width="width" v-show="!imageLoaded" :height="height" :punch="punch" key="canvas" style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0;"/>
      <img :src="src" :srcset="srcset" v-bind="$attrs" @load="onLoaded" v-show="imageLoaded" key="image" style="height: 100%; width: 100%; position: absolute; top: 0; left: 0; right: 0; bottom: 0;"/>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BlurHashCanvas from './BlurHashCanvas.vue'
import { parseNumber, percentRatio } from './utils'

@Component({
  components: {
    BlurHashCanvas
  }
})
export default class BlurHash extends Vue {
  @Prop({ type: String, required: true}) private hash!: string
  @Prop({ type: [Number, String], default: 128 }) private width!: string | number
  @Prop({ type: [Number, String], default: 128 }) private height!: string | number
  @Prop({ type: Number, default: 1 }) private punch!: number
  @Prop({ type: String, required: true }) private src!: string
  @Prop({ type: String, default: null }) private srcset!: string
  @Prop({ type: Number, default: 500 }) private transitionDuration!: number

  imageLoaded = false

  onLoaded() {
    this.imageLoaded = true
  }

  get computedRatio() {
    return percentRatio(parseNumber(this.height), parseNumber(this.width))
  }

  get cssVars() {
    return {
      '--transition-duration': this.transitionDuration > 0 ? `${this.transitionDuration / 1000}s` : 'none'
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity var(--transition-duration);
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>