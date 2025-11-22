<template>
  <div class="grid gap-6" :class="colsClass">
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  columns: { type: Number, default: 3 }
});

const colsClass = {
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
}[props.columns];
</script>
