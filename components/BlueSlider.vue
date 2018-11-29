<template>
  <input
    ref="slider"
    :value="slide"
    :disabled="disabled"
    class="slider"
    type="range"
    @click="handleSliderClick"
  >
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      disabled: false,
      sliderInterval: null,
      autoSlide: true,
      timeID: null,
    }
  },

  watch: {
    slide(val) {
      if (val === 75) {
        this.$nuxt.$emit('beginRipples')
      }
      if (val === 100) {
        clearInterval(this.sliderInterval)
      }
    },
  },

  async mounted() {
    if (process.client) {
      this.timeID = setTimeout(() => {
        this.$refs.slider.click()
      }, 2500)
    }

    this.$nuxt.$on('noAutoSlide', () => {
      clearTimeout(this.timeID)
      this.autoSlide = false
      this.slide = 0
    })
  },

  methods: {
    handleSliderClick() {
      this.disabled = true
      this.sliderInterval = setInterval(() => {
        this.slide++
      }, 15)
    },
  },
}
</script>

<style>
input[type='range'].slider {
  -webkit-appearance: none;
  width: 100%;
  margin: 26.5px 0;
}
input[type='range'].slider:focus {
  outline: none;
}
input[type='range'].slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #dae1e7;
  border-radius: 0px;
  border: 0px solid #562425;
}
input[type='range'].slider::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  border: 0px solid #00bcd4;
  transform: rotate(12.5deg);
  height: 56px;
  width: 28px;
  border-radius: 14px;
  background: #00bcd4;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -26.5px;
}
input[type='range'].slider:focus::-webkit-slider-runnable-track {
  background: #dae1e7;
}
input[type='range'].slider::-moz-range-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  background: #dae1e7;
  border-radius: 0px;
  border: 0px solid #562425;
}
input[type='range'].slider::-moz-range-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  border: 0px solid #00bcd4;
  transform: rotate(12.5deg);
  height: 56px;
  width: 28px;
  border-radius: 14px;
  background: #00bcd4;
  cursor: pointer;
}
input[type='range'].slider::-ms-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
input[type='range'].slider::-ms-fill-lower {
  background: #dae1e7;
  border: 0px solid #562425;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type='range'].slider::-ms-fill-upper {
  background: #dae1e7;
  border: 0px solid #562425;
  border-radius: 0px;
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
}
input[type='range'].slider::-ms-thumb {
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);
  border: 0px solid #00bcd4;
  transform: rotate(12.5deg);
  height: 56px;
  width: 28px;
  border-radius: 14px;
  background: #00bcd4;
  cursor: pointer;
  height: 3px;
}
input[type='range'].slider:focus::-ms-fill-lower {
  background: #dae1e7;
}
input[type='range'].slider:focus::-ms-fill-upper {
  background: #dae1e7;
}
</style>
