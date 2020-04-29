<template>
  <canvas ref="canvas" :width="currentWidth" :height="currentHeight" />
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
import { decode } from 'blurhash'
import { parseNumber } from './utils'

@Component
export default class BlurHashCanvas extends Vue {
  @Prop({ type: String, required: true }) private hash!: string
  @Prop({ type: [Number, String], default: 128 }) private width!: string | number
  @Prop({ type: [Number, String], default: 128 }) private height!: string | number
  @Prop({ type: Number, default: 1 }) private punch!: number

  @Watch('watchers')
  async updateCanvas() {
    await this.$nextTick()
    this.draw()
  }

  get watchers() {
    return [this.hash, this.width, this.height, this.punch]
  }

  get currentWidth() {
    return parseNumber(this.width)
  }

  get currentHeight() {
    return parseNumber(this.height)
  }

  get currentPunch() {
    return parseNumber(this.punch)
  }

  draw() {
    const pixels = decode(this.hash, this.currentWidth, this.currentHeight, this.punch)
    const ctx = (this.$refs.canvas as HTMLCanvasElement).getContext('2d')
    const imageData = ctx!.createImageData(this.currentWidth, this.currentHeight)
    imageData.data.set(pixels)
    ctx!.putImageData(imageData, 0, 0)
  }

  mounted() {
    this.draw()
  }
}
</script>