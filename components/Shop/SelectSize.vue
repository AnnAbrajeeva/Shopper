<template>
 <div class="form_radio_btn">
   <label :class="size == value ? 'checked' : ''" class="mr-2" :for="size" v-for="size in viewSizes" :key="size">
    <input v-model="value" type="radio" name="radio-input" :value="size" 
 :id="size" 
    @change="$emit('input', size)" />
    {{ size }}
   </label>
  </div>
</template>


<script>
export default {
  props: {
    viewSizes: {
     required: true,
     type: Array
    }
  },
  data() {
    return {
      value: ''
    };
  },
};
</script>