<template>
    <div class="relative -top-24">
      <div class="grid grid-cols-2 gap-32">
        <div>
            <div class="col-span-3 h-[450px] w-[650px] bg-[#FED233] relative z-0"></div>
            <img :src="image1" alt="working out" class="h-[470px] relative -right-16 -mt-[394px] z-30"/>
        </div>
        <div class="pl-24 pt-12">
            <h1 class="text-5xl font-bold text-gray-900 my-12">Gift Your <span class="text-[#FED233]">Loved Ones</span></h1>
            <p class="text-gray-600 text-2xl font-normal pr-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <div>
                <button class="bg-gray-700 text-white text-xl  px-8 py-4 rounded-md mt-12 hover:bg-yellow-500">See Plans</button>
            </div>
        </div>
      </div>
      <div class="px-12">
        <h1 class="text-5xl font-bold text-gray-900 my-12">Take A Look At Our <span class="text-[#FED233]">Affordable Pricing</span></h1>
        <p class="text-gray-600 text-3xl font-semibold pr-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      </div>
    </div>
</template>
<script setup>
 import image1 from '@/assets/photos/gift.png'
</script>