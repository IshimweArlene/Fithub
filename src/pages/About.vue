<template>
    <div>
        <div class="relative">
            <section class="bg-yellow-400 -mt-24 p-10 [clip-path:polygon(0_0,100%_0,100%_60%,0_100%)] z-0">
                <div class="max-w-xl">
                    <h2 class="text-5xl text-gray-900  font-bold">Get To Know <span class="text-white">About Us</span></h2>
                    <p class="mt-4 text-3xl text-gray-700 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p class="text-2xl mt-8 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam, tortor sollicitudin egestas convallis. Lorem ipsum dolor sit amet, consectetur adipiscing. </p>
                    <button @click="navigateToContact" class="bg-gray-800 text-white text-2xl cursor-pointer mt-8 hover:bg-slate-950 transition-transform duration-200 ease-in-out hover:scale-95 h-12 px-8 rounded-md"> Contact Us </button>
                </div>
            </section> 
            <div>
                <img :src="image1" alt="boss" class="relative w-[800px] h-[500px]  ml-[489px] -mt-72 z-30" />
            </div>
        </div>
    </div>
</template>
<script setup>
   import image1 from '@/assets/photos/boss.png'
   import { useRouter } from 'vue-router'
   const router = useRouter()
   const navigateToContact = () => router.push('/contact') 
</script>