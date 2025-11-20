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
        <p class="text-gray-600 mb-14 text-3xl font-semibold pr-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div class="grid grid-cols-2 gap-14 px-24">
            <diV class="w-full shadow-xl shadow-gray-300 bg-white">
                <h1 class="text-gray-700 font-bold text-6xl bg-yellow-400 text-center p-20">Frw. 10000</h1>
                
                <div class="pl-8 mt-12 flex gap-8 text-gray-600 text-2xl">
                    <CheckCircle class="text-yellow-500 size-8"/>
                    <p>Workout Plan</p>
                </div>
                <div class="pl-8 mt-12 flex gap-8 text-gray-600 text-2xl">
                    <CheckCircle class="text-yellow-500 font-bold size-8"/>
                    <p>Nutrition Plan</p>
                </div>
                <div class="pl-8 mt-12 flex gap-8 text-gray-600 text-2xl">
                    <CheckCircle class="text-yellow-500 font-bold size-8"/>
                    <p>Health Tips</p>
                </div>
                <div class="pl-8 mt-12 flex gap-8 text-gray-600 text-2xl">
                    <CheckCircle class="text-yellow-500 font-bold size-8"/>
                    <p>Expert Guidance</p>
                </div>
                <div class="pl-8 mt-12 flex gap-8 text-gray-600 text-2xl">
                    <CheckCircle class="text-yellow-500 font-bold size-8"/>
                    <p>Program Revision</p>
                </div>                
                <div class="pl-8 mt-12 mb-8 flex gap-8 text-gray-600 text-2xl">
                    <CheckCircle class="text-yellow-500 font-bold size-8"/>
                    <p>Money Back Guarantee</p>
                </div>
                <div class="items-center justify-center flex flex-col text-2xl text-gray-600 mb-4">
                    <button class="bg-gray-800 text-white text-xl  px-8 py-4  m-8 hover:bg-yellow-500">Get Started</button>
                    <p>Enroll Now For Just</p>
                    <p>10,00O Frw Per Month</p>
                </div>
            </diV>
            <diV class="w-full shadow-xl shadow-gray-300 bg-white">
                <h1 class="text-gray-700 font-bold text-6xl bg-yellow-400 text-center p-20">Frw. 10000</h1>
                
                <div class="pl-8 mt-12 flex gap-8 text-gray-600 text-2xl">
                    <CheckCircle class="text-yellow-500 size-8"/>
                    <p>Workout Plan</p>
                </div>
                <div class="pl-8 mt-12 flex gap-8 text-gray-600 text-2xl">
                    <CheckCircle class="text-yellow-500 font-bold size-8"/>
                    <p>Nutrition Plan</p>
                </div>
                <div class="pl-8 mt-12 flex gap-8 text-gray-600 text-2xl">
                    <CheckCircle class="text-yellow-500 font-bold size-8"/>
                    <p>Health Tips</p>
                </div>
                <div class="pl-8 mt-12 flex gap-8 text-gray-600 text-2xl">
                    <CheckCircle class="text-yellow-500 font-bold size-8"/>
                    <p>Expert Guidance</p>
                </div>
                <div class="pl-8 mt-12 flex gap-8 text-gray-600 text-2xl">
                    <CheckCircle class="text-yellow-500 font-bold size-8"/>
                    <p>Program Revision</p>
                </div>                
                <div class="pl-8 mt-12 mb-8 flex gap-8 text-gray-600 text-2xl">
                    <CheckCircle class="text-yellow-500 font-bold size-8"/>
                    <p>Money Back Guarantee</p>
                </div>
                <div class="items-center justify-center flex flex-col text-2xl text-gray-600 mb-4">
                    <button class="bg-gray-800 text-white text-xl  px-8 py-4  m-8 hover:bg-yellow-500">Get Started</button>
                    <p>Enroll Now For Just</p>
                    <p>10,00O Frw Per Month</p>
                </div>
            </diV>
        </div>
      </div>
      <div class="p-16">
        <h1 class="text-5xl font-bold text-gray-900 my-12">What <span class="text-[#FED233]">We Will Provide</span></h1>
        <div class="grid grid-cols-3 gap-12">
          <div class="w-full h-96 bg-white shadow-xl shadow-gray-400 px-4">
            <h1 class="text-center text-gray-800 text-3xl p-4">10 + Experience</h1>
            <div class="grid grid-cols-2">
                <p class="text-gray-600 text-2xl pt-6 pl-2">Get Guidance of our experienced coach Get Guidance of our experienced coach</p>
                <img :src="trainer" alt="trainer" class="h-64 w-[400px]"/>
            </div>
          </div>
          <div class="w-full h-96 bg-white shadow-xl shadow-gray-400 px-4">
            <h1 class="text-center text-gray-800 text-3xl p-4">10 + Experience</h1>
            <div class="grid grid-cols-2">
                <p class="text-gray-600 text-2xl pt-6 pl-2">Get Guidance of our experienced coach Get Guidance of our experienced coach</p>
                <img :src="trainer" alt="trainer" class="h-64 w-[400px]"/>
            </div>
          </div>
          <div class="w-full h-96 bg-white shadow-xl shadow-gray-400 px-4">
            <h1 class="text-center text-gray-800 text-3xl p-4">10 + Experience</h1>
            <div class="grid grid-cols-2">
                <p class="text-gray-600 text-2xl pt-6 pl-2">Get Guidance of our experienced coach Get Guidance of our experienced coach</p>
                <img :src="trainer" alt="trainer" class="h-64 w-[400px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
 import image1 from '@/assets/photos/gift.png'
 import { CheckCircle } from 'lucide-vue-next';
 import trainer from '@/assets/photos/trainer2.png'
</script>