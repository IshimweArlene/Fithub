<template>
  <div class="relative bg-[#b38f0a]/80 py-10 px-6 rounded-md overflow-hidden">
    <div class="grid grid-cols-3 gap-8 items-start">
      <div class="col-span-1 bg-white/30 rounded-md p-6 text-center">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">{{ activeItem.name }}</h3>
        <p class="text-gray-700 leading-7 text-lg text-left indent-6">{{ activeItem.description }}</p>
      </div>
      <div class="col-span-1">
        <div class="bg-gray-400/70 h-72 w-full rounded-md overflow-hidden flex items-center justify-center">
          <img v-if="activeItem.beforeImage" :src="activeItem.beforeImage" alt="Before" class="w-full h-full object-cover" />
        </div>
        <p class="text-center mt-3 text-lg font-semibold text-gray-800">Before</p>
      </div>
      <div class="col-span-1">
        <div class="bg-gray-400/70 h-72 w-full rounded-md overflow-hidden flex items-center justify-center">
          <img v-if="activeItem.afterImage" :src="activeItem.afterImage" alt="After" class="w-full h-full object-cover" />
        </div>
        <p class="text-center mt-3 text-lg font-semibold text-gray-800">After</p>
      </div>
    </div>

    <div class="mt-8 flex items-center justify-center gap-6">
      <button @click="prev" class="p-2 rounded-full hover:bg-black/10" aria-label="Previous">
        <span class="text-2xl">‹</span>
      </button>
      <div class="flex items-center gap-2">
        <button
          v-for="(it, i) in itemsToUse"
          :key="it.id ?? i"
          @click="go(i)"
          :class="[
            'h-2.5 w-2.5 rounded-full',
            current === i ? 'bg-gray-800' : 'bg-gray-400'
          ]"
          aria-label="Go to slide"
        />
      </div>
      <button @click="next" class="p-2 rounded-full hover:bg-black/10" aria-label="Next">
        <span class="text-2xl">›</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})

const fallback = [
  {
    id: 'c1',
    name: 'Name of the client here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam, tortor sollicitudin egestas convallis. Lorem ipsum dolor sit amet, rem ipsum dolor sit amet, consectetur adipiscing elit.',
    beforeImage: '',
    afterImage: ''
  },
  {
    id: 'c2',
    name: 'Another client',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam, tortor sollicitudin egestas convallis.',
    beforeImage: '',
    afterImage: ''
  }
]

const itemsToUse = computed(() => (props.items && props.items.length ? props.items : fallback))
const current = ref(0)

const activeItem = computed(() => itemsToUse.value[current.value])

function prev() {
  current.value = (current.value - 1 + itemsToUse.value.length) % itemsToUse.value.length
}
function next() {
  current.value = (current.value + 1) % itemsToUse.value.length
}
function go(i) {
  current.value = i
}
</script>
