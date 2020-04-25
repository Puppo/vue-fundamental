<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
import parts from '../data/parts';

export default {
  name: 'PartInfo',
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
      return parts[this.partType].find((part) => part.id === +this.id);
    },
  },
};
</script>
