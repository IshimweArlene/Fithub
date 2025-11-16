<template>
  <div class="w-full h-screen flex items-center justify-center relative overflow-hidden">

    <button 
      @click="prev"
      class="absolute left-5 text-yellow-400 text-8xl font-bold cursor-pointer">
      <arrow-big-left/>
    </button>
   <button 
      @click="next"
      class="absolute right-5 text-yellow-400 text-8xl font-bold cursor-pointer">
      <arrow-big-right/>
    </button>

    <div class="relative w-full flex items-center justify-center">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="absolute transition-all duration-700 ease-out rounded-full overflow-hidden"
        :style="getStyle(index)"
      >
        <img :src="img" class="w-full h-full object-cover" />
      </div>
    </div>

  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { ArrowBigLeft, ArrowBigRight } from "lucide-vue-next";
import image1 from "@/assets/photos/healthyFood.jpg";
import image2 from "@/assets/photos/workout.jpg";
import image3 from "@/assets/photos/workout2.jpg";

const images = [image1, image2, image3];
const current = ref(1);
let interval = null;

const getStyle = (index) => {
  const diff = index - current.value;
  const adjusted = (diff + images.length) % images.length;

  if (adjusted === 0) {
    return {
      width: "450px",
      height: "450px",
      opacity: 1,
      transform: "translateX(0px)",
      zIndex: 3,
    };
  }

  if (adjusted === 1) {
    return {
      width: "300px",
      height: "300px",
      opacity: 0.4,
      transform: "translateX(-400px)",
      zIndex: 2,
    };
  }

  return {
    width: "300px",
    height: "300px",
    opacity: 0.4,
    transform: "translateX(400px)",
    zIndex: 2,
  };
};

const next = () => {
  current.value = (current.value + 1) % images.length;
};

const prev = () => {
  current.value = (current.value - 1 + images.length) % images.length;
};
onMounted(() => {
  interval = setInterval(next, 2000);
});
onUnmounted(() => {
  clearInterval(interval);
});
</script>
