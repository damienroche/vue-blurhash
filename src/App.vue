<template>
  <div id="app">
    <blur-hash-image width="400" height="300" hash="LdHfL}oJR$WBKnfi%3ofT0kCM{ay" src="https://images.unsplash.com/photo-1545910684-8e7c081be9b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" alt="green lawn grass during daytime"/>
    <div style="display: flex; align-items: center; padding: 1rem;">
      <div>
        <label>Width</label>
        <input type="range" v-model="width" min="100" max="1000">
      </div>

      <div>
        <label>Height</label>
        <input type="range" v-model="height" min="100" max="1000">
      </div>
      
      <div>
        <label>Punch</label>
        <input type="range" v-model.number="punch" min="1" max="20" step="1">
      </div>
    </div>
    <div>
      <blur-hash :width="width" :height="height" :punch="punch" hash="LKO2?U%2Tw=w]~RBVZRi};RPxuwH"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BlurHashImage from './../lib/BlurHashImage.vue'
import BlurHash from './../lib/BlurHash.vue'
import BlurHashCanvas from './../lib/BlurHashCanvas.vue'

@Component({
  components: {
    BlurHashImage,
    BlurHash,
    BlurHashCanvas
  },
})
export default class App extends Vue {
  width = 128
  height = 128
  punch = 1
}
</script>