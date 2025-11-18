<template>
    <div>
        <div class="relative">
            <section class="bg-yellow-400 -mt-24 p-10 [clip-path:polygon(0_0,100%_0,100%_65%,0_100%)] z-0 h-[650px]">
                <div class="max-w-xl">
                    <h2 class="text-5xl text-gray-900 my-8  font-bold">Get To Know <span class="text-white">About Us</span></h2>
                    <p class="mt-4 text-3xl text-gray-700 mb-6 font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p class="text-2xl my-12 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam, tortor sollicitudin egestas convallis. Lorem ipsum dolor sit amet, consectetur adipiscing. </p>
                    <button @click="navigateToContact" class="bg-gray-800 text-white text-2xl cursor-pointer mt-8 hover:bg-slate-950 transition-transform duration-200 ease-in-out hover:scale-95 h-12 px-8 rounded-md"> Contact Us </button>
                </div>
            </section> 
            <div>
                <img :src="image1" alt="boss" class="relative w-[750px] h-[500px]  ml-[750px] -mt-[550px] z-30" />
            </div>
        </div>
        <div class="my-24">
           <h1 class="text-[40px] font-semibold px-8 text-gray-700 my-3"><span class="text-[#FED233]">Our</span> Coach</h1>
           <p class="text-xl font-medium px-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam </p>
        </div>
       <div class="relative mb-16">
        <div class="grid grid-cols-2 gap-4">
            <img :src="image1" alt="boss" class="relative h-[350px] w-[650px] ml-12 z-30" />
            <div>
                <p class="text-gray-500 text-xl mb-4 mt-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam,
                tortor sollicitudin egestas convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed quam sagittis aliquam, tortor sollicitudin egestas convallis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
                <p class="text-gray-500 text-xl mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam,
                    tortor sollicitudin egestas convallis. Lorem ipsum dolor sit amet,
                </p>
                <p class="text-gray-500 text-xl mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam,
                    tortor sollicitudin egestas convallis. Lorem ipsum dolor sit amet,
                </p>
            </div>
            <div class="bg-[#FED233] h-44 w-72 z-0 absolute top-[220px] left-[460px] mb-44 m"></div>
            <div class="bg-[#FED233] h-44 w-72 z-0  absolute -top-12 left-12 "></div>  '
        </div>
       </div>
       <div>
        <h1 class="text-[50px] font-bold px-8 text-gray-700 my-3">Meet<span class="text-[#FED233]"> Our Team</span></h1>
        <p class="text-xl font-medium px-12 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam </p>

        <div class="relative mt-28 mb-20">
          <div class="absolute inset-x-0 -bottom-12 h-72 bg-[#FED233] z-0"></div>
          <div class="grid grid-cols-4 gap-4 px-12 mb-8 relative z-10">
              <div class="bg-white shadow-xl text-center h-96 w-80 relative pt-28">
                 <div class="w-44 h-44 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full overflow-hidden shadow-md">
                  <img :src="image2" class="w-full h-full object-cover" />
                 </div>
                 <h1 class="text-gray-700 text-xl font-bold mt-4">Arlene</h1>
                 <p class="text-md text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam</p>
              </div>
              <div class="bg-white shadow-xl text-center h-96 w-80 relative pt-28">
                 <div class="w-44 h-44 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full overflow-hidden shadow-md">
                  <img :src="image2" class="w-full h-full object-cover" />
                 </div>
                 <h1 class="text-gray-700 text-xl font-bold mt-4">Arlene</h1>
                 <p class="text-md text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam</p>
              </div>
              <div class="bg-white shadow-xl text-center h-96 w-80 relative pt-28">
                 <div class="w-44 h-44 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full overflow-hidden shadow-md">
                  <img :src="image2" class="w-full h-full object-cover" />
                 </div>
                 <h1 class="text-gray-700 text-xl font-bold mt-4">Arlene</h1>
                 <p class="text-md text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam</p>
              </div>
              <div class="bg-white shadow-xl text-center h-96 w-80 relative pt-28">
                 <div class="w-44 h-44 absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full overflow-hidden shadow-md">
                  <img :src="image2" class="w-full h-full object-cover" />
                 </div>
                 <h1 class="text-gray-700 text-xl font-bold mt-4">Arlene</h1>
                 <p class="text-md text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam</p>
              </div>
          </div>
        </div>
        <div>
          <h1 class="text-[40px] font-semibold px-8 text-gray-700 my-3">Take A Look At<span class="text-[#FED233]"> Our Clients</span> </h1>
          <p class="text-xl font-medium px-12 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam </p>
          <div class="px-8 mt-8">
            <ClientCorousel :items="clients" />
          </div>
        </div>
        <div>
           <h1 class="text-[40px] font-semibold px-8 text-gray-700 my-3">Join<span class="text-[#FED233]"> Evolve Your Lifestyle</span> </h1>
           <p class="text-xl font-medium px-12 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam </p>
        </div>
       </div>
    </div>

</template>
<script setup>
   import image2 from '@/assets/photos/1.png'
   import image1 from '@/assets/photos/boss.png'
   import ClientCorousel from '@/components/ClientCorousel.vue'
   import { useRouter } from 'vue-router'
   const router = useRouter()
   const navigateToContact = () => router.push('/contact') 

   const clients = [
     {
       id: 'client-1',
       name: 'Name of the client here',
       description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam, tortor sollicitudin egestas convallis. Lorem ipsum dolor sit amet, rem ipsum dolor sit amet, consectetur adipiscing elit.',
       beforeImage: image2,
       afterImage: image2
     },
     {
       id: 'client-2',
       name: 'Another Client',
       description:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam, tortor sollicitudin egestas convallis.',
       beforeImage: image2,
       afterImage: image2
     }
   ]
</script>