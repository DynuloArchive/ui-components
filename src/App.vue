<template>
  <div id="app">
    <h1>TextInput</h1>
    <TextInput>
      <input placeholder="Guild" type="text" maxlength="12" spellcheck="false"/>
    </TextInput>
    <pre><code>
&#x3C;TextInput&#x3E;
&#x3C;input
  placeholder=&#x22;Guild&#x22;
  type=&#x22;text&#x22;
  maxlength=&#x22;12&#x22;
  spellcheck=&#x22;false&#x22; /&#x3E;
&#x3C;/TextInput&#x3E;
    </code></pre>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TextInput from './components/TextInput.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TextInput,
  },
});
</script>

<style lang="scss">
body {
  background-color: $background;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
  margin-top: 60px;
}
</style>
