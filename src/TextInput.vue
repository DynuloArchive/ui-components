<template>
  <div class="field">
    <slot ref="input" />
    <label for="text" class="label">{{ field }}</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TextInput',
  mounted() {
    if (this.$slots.default !== undefined) {
      const elm = (this.$slots.default[0].elm as HTMLInputElement);
      this.field = elm.placeholder;
      elm.placeholder = ' ';
    }
  },
  data() {
    return {
      field: '',
    };
  },
});
</script>

<style lang="scss" scoped>
.field {
  margin: 0 auto;
  position: relative;
  border-bottom: 0.2rem dashed $text-color;
  margin: 4rem auto 1rem;
  transition: 500ms;

  .label {
    display: block;
    color:$text-color;
    font-size: 1.2rem;
    pointer-events: none;
    position: absolute;
    transform: translateY(-2rem);
    transform-origin: 0%;
    transition: transform 400ms;
  }
  input {
    outline: none;
    border: none;
    overflow: hidden;
    margin: 0;
    width: 100%;
    padding: 0.25rem 0;
    background: none;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    transition: border 500ms;
  }
}
/* Border animation */
.field::after {
  content: "";
  position: relative;
  display: block;
  height: 4px;
  width: 100%;
  background: $accent;
  transform: scaleX(0);
  transform-origin: 0%;
  opacity: 0;
  transition: all 500ms ease;
  top: 2px;
}
.field:focus-within {
  border-color: transparent;
}
.field:focus-within::after {
  transform: scaleX(1);
  opacity: 1;
}
.field:focus-within .label,
input:not(:placeholder-shown) + .label {
  transform: scale(0.8) translateY(-5rem);
  opacity: 1;
}
</style>
