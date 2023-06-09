<template>
  <div :class="$style.component">
  </div>
</template>

<script lang="ts">
// Packages
import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'area-view',

  data: () => ({
    area: {
      _id: '1',

      name: 'The Garden Main',

      altNames: [
        'Lower Garden',
      ],

      externalIds: {
        mountainProject: '105818219',
      },

      externalHrefs: {
        mountainProject: 'https://www.mountainproject.com/area/105818219/the-garden-boulders',
      },

      latitude: 44.44069,

      longitude: -122.57549,

      elevation: 855,

      crag: '1',

      areas: [],

      shape: [],

      routes: 100,

      updated: new Date(),

      images: [],
    },
  }),

  created() {
    this.handlePageLoad({ name: this.$route.name });
  },

  methods: {
    ...mapActions('navigation', [
      'handlePageLoad',
    ]),
  },
});
</script>

<script lang="scss" module>
.component {
}
</script>
