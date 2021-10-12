<template>
  <div class="track-container">
    <div class="box">
      <span>от</span><input type="text" v-model="value[0]" />
      <span>до</span><input type="text" v-model="value[1]" />
    </div>

    <vue-slider
      ref="slider"
      v-model="value"
      :min="min"
      :max="max"
      :enable-cross="false"    
    ></vue-slider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [0, 2000],
      min: 0,
      max: 2000,
    };
  },
  methods: {
     setValue: function(value) {
        this.value = value;
    }
  },
  watch: {
    value() {
       this.$store.dispatch('products/setPriceValue', this.value)
    }
  }
};
</script>

<style lang="scss">
.box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: baseline;
}
.box span {
  margin-left: 5px;
  margin-right: 2%;
}
.vue-slider {
  width: 90% !important;
  margin: 0 auto;
}
.track-container {
  position: relative;
  cursor: pointer;
  height: 0.5rem;
  width: 100%;
}
.pricing input[type="text"] {
  border: 1px solid #a70101;
  margin-right: 0 !important;
}
.vue-slider-dot-handle {
  cursor: pointer;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 0;
  background-color: black;
  box-sizing: border-box;
  box-shadow: 0.5px 0.5px 2px 1px rgb(0 0 0 / 32%);
  position: absolute;
  z-index: 2;
  top: -5px;
  left: -3px;
}
.vue-slider-process {
  background-color: black;
  z-index: 2;
  display: block;
  position: absolute;
  width: 100%;
  height: 0.5rem !important;
}
.vue-slider-ltr {
  background-color: #afafaf;
  width: 100%;
  height: 0.5rem !important;
  padding: 0 !important;
}
.vue-slider-dot-tooltip-show .vue-slider-dot-tooltip-inner-top {
  transform: rotateZ(-45deg);
}
.vue-slider-dot-tooltip-show .vue-slider-dot-tooltip-inner {
  opacity: 1;
}
.vue-slider-dot-tooltip-inner {
  border-radius: 50% 50% 50% 0px;
  background-color: #a70101;
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    opacity 0.2s linear;
}
.vue-slider-dot-tooltip-inner {
  border-radius: 50% 50% 50% 0px;
  background-color: #a70101;
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
    opacity 0.2s linear;
}
.vue-slider-dot-tooltip-text {
  font-size: 12px;
  white-space: nowrap;
  text-align: center;
  color: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
}
.vue-slider-dot-tooltip-inner-top .vue-slider-dot-tooltip-text {
  transform: rotateZ(45deg);
}
</style>