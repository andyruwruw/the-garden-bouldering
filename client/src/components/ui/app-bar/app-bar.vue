<template>
  <v-app-bar
    :class="$style.component"
    color="#343A3F"
    app>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app-bar',
});
</script>

<style lang="scss" module>
.component {
  display: block;
}
</style>
