# vue-blurhash

<p align="center">
  <img src="./vue-blurhash.jpg" alt="Blurhash vuejs plugin">
</p>

> VueJS components using the [blurhash algorithm](https://blurha.sh)

## Installation

You need [Vue.js](https://vuejs.org/) **version 2.0+**

### Install via npm

```bash
npm install vue-blurhash
yarn add vue-blurhash
```

### Import and use

```javascript
import Vue from 'vue'
import VueBlurHash from 'vue-blurhash'

...

Vue.use(VueBlurHash)
```

```vue
<template>
  <blur-hash-image width="400" height="300" hash="LdHfL}oJR$WBKnfi%3ofT0kCM{ay" src="https://images.unsplash.com/photo-1545910684-8e7c081be9b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80" alt="green lawn grass during daytime"/>
</template>
```

## Props

| Name                  | Type              | Default                          | Description                                           |
|-----------------------|-------------------|---------------------------------|--------------------------------------------------------|
| `height`              | [Number, String]  | 128                             | Height of image                                        |
| `width`               | [Number, String]  | 128                             | Width of image                                         |
| `punch`               | [Number, String]  | 1                               | This value adjusts the contrast on the decoded image   |
| `src`                 | String            | null                            | Image source url                                       |
| `transitionDuration`  | Number            | 500                             | Fade animation - Transition time (in ms)               |

