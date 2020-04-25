<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
import getPartsMixin from './get-parts.mixin';

export default {
  name: 'PartInfo',
  mixins: [getPartsMixin],
  props: {
    partType: {
      type: String,
      required: true,
    },
    id: {
      type: [Number, String],
      required: true,
    },
  },
  computed: {
    part() {
      return this.parts[this.partType].find((part) => part.id === +this.id);
    },
  },
};
</script>
