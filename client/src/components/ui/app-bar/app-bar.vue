<template>
  <v-app-bar
    :class="$style.component"
    color="#1C1E1F"
    app
    flat>
    <div :class="$style.content">
      <span :class="$style.title">
        The Garden Bouldering
      </span>
    </div>
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

.title {
  color: white;
}

.content {
  display: flex;
  align-items: center;
}
</style>
