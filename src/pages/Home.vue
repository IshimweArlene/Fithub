<template>
  <div class="space-y-6 px-12">
    <div class="flex justify-center text-center">
      <h1 class="text-center text-6xl text-gray-900 font-bold px-44">
        Get Your Perfect Workout With The
        <span class="text-[#FED233]">Perfect Trainers</span>
      </h1>
    </div>

    <Corousel />

    <div>
      <h1 class="text-5xl font-bold text-gray-900">
        What Is <span class="text-[#FED233]">Evolve Your Lifestyle</span>
      </h1>
    </div>

    <div class="relative">
      <div class="grid grid-cols-12 gap-8 relative z-0">
        <div class="col-span-9 text-2xl text-gray-800 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam sagittis aliquam, tortor sollicitudin egestas convallis.
        </div>
        <div class="col-span-3 h-[450px] w-full bg-[#FED233] relative z-0"></div>
      </div>

      <div class="grid grid-cols-12 gap-8 relative z-30 -mt-[350px]">
        <div class="col-span-7 space-y-4 text-gray-500 text-2xl">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum obcaecati unde ut voluptatem dolor.
            Deleniti tenetur et voluptate alias quam nesciunt perferendis. Nihil aspernatur culpa labore possimus quod illum!
          </p>
          <p>
            Deleniti tenetur et voluptate alias quam nesciunt perferendis. Nihil aspernatur culpa labore possimus quod illum!
          </p>

          <button
            @click="navigateToContact"
            class="bg-gray-800 text-white cursor-pointer hover:bg-slate-950 transition-transform duration-200 ease-in-out hover:scale-95 h-12 px-8 rounded-md"
          >
            Contact Us
          </button>
        </div>

        <img
          :src="image1"
          alt="trainer image"
          class="col-span-5 w-full h-96 rounded-lg object-cover pr-12"
        />
      </div>
    </div>

    <div>
      <h1 class="text-5xl font-bold text-gray-900">
        Why Peaople Should Take <span class="text-[#FED233]">Health Advice</span>
      </h1>

      <p class="text-2xl font-bold text-gray-500 mt-8 mb-20 pr-72">
        Deleniti tenetur et voluptate alias quam nesciunt perferendis. Nihil aspernatur culpa labore possimus quod illum!
      </p>

      <div class="relative">
        <div class="h-[400px] w-[620px] bg-[#FED233] z-0"></div>

        <div class="grid grid-cols-2 relative z-10 gap-8 -mt-[420px] pl-12 mb-24">
          <img
            :src="image1"
            alt="trainer image"
            class="w-full h-96 rounded-lg object-cover pr-12"
          />

          <div class="space-y-4 text-gray-500 text-2xl">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias laborum obcaecati unde ut voluptatem dolor.
              Deleniti tenetur et voluptate alias quam nesciunt perferendis. Nihil aspernatur culpa labore possimus quod illum!
            </p>
            <p>
              Deleniti tenetur et voluptate alias quam nesciunt perferendis. Nihil aspernatur culpa labore possimus quod illum!
            </p>

            <button
              @click="navigateToContact"
              class="bg-gray-800 text-white cursor-pointer hover:bg-slate-950 transition-transform duration-200 ease-in-out hover:scale-95 h-12 px-8 rounded-md"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <div class="grid grid-cols-12 gap-8 relative z-0">
        <div class="col-span-9 text-2xl text-gray-800 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div class="col-span-3 h-[450px] w-full bg-[#FED233] relative z-0"></div>
      </div>

      <div class="grid grid-cols-12 gap-8 relative z-30 -mt-[350px]">
        <div class="col-span-7 space-y-4 text-gray-500 text-2xl">
          <div class="space-y-6"> 
            <div class="flex items-start gap-4">
                <UserIcon class="w-20 h-20 text-[#FED233]" />
                <div>
                <h1 class="text-3xl font-semibold">10+ Experience</h1>
                <p class="text-gray-600 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <FileBarChart class="w-20 h-20 text-[#FED233]" />
                <div>
                <h1 class="text-3xl font-semibold">Best Plan</h1>
                <p class="text-gray-600 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>

            <div class="flex items-start gap-4">
                <FileCheck class="w-20 h-20 text-[#FED233]" />
                <div>
                    <h1 class="text-3xl font-semibold">Guarantee Results</h1>
                    <p class="text-gray-600 text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
          </div>
        </div>

        <img
          :src="image1"
          alt="trainer image"
          class="col-span-5 w-full h-96 rounded-lg object-cover pr-12"
        />
      </div>
    </div>
    <div>
        <h1 class="text-5xl font-bold text-gray-900 mt-20 mb-12 "><span class="text-[#FED233]">Categories</span> To Which We Provide</h1>
        <p class="text-gray-600 text-3xl font-semibold pr-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div class=" grid grid-cols-12 gap-2 mt-12 mb-24">
           <div class="col-span-7 h-[430px] text-2xl text-gray-700 w-[843px] pl-12 pr-64 pt-12 bg-[#FED233] relative z-0 ">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            <li>Sed quam sagittis aliquam, tortor sollicitudin egestas convallis. </li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li> 
            <li>Sed quam sagittis aliquam, tortor sollicitudin egestas convallis.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li> 
            </li>
           </div>
           <div class="space-y-4 col-span-5 relative z-10">
             <div class="grid grid-cols-3 -ml-60">
                <div class="bg-white shadow-xl h-60 w-64"></div>
                <div class="bg-white shadow-xl h-60 w-64"></div>
                <div class="bg-white shadow-xl h-60 w-64"></div>
             </div>
             <div class="grid grid-cols-3 pb-8 -ml-60">
                <div class="bg-white shadow-xl h-60 w-64"></div>
                <div class="bg-white shadow-xl h-60 w-64"></div>
                <div class="bg-white shadow-xl h-60 w-64"></div>
             </div>
            </div>
        </div>
    </div>
    <div>
      <h1 class="text-5xl font-bold text-gray-900 my-12">What Will <span class="text-[#FED233]">We Provide</span></h1> 
       <div class="grid grid-cols-2 gap-4">
         <div>
            <img :src="image2" alt="service image" class="w-full h-96 rounded-lg object-cover pr-12"/> 
            <h1 class="text-3xl my-3 font-semibold text-gray-700">Personalized Workout Plan</h1>
            <p class="text-xl text-gray-500 mb-14">You will be given a personalized workout plan according to your goal that suits you. 
                If you don’t have time to go to the gym, no problem at all. 
                Our program is designed in such a way that you can follow your workout plan even at your home.
            </p>
         </div>
         <div>
            <img :src="image3" alt="service image" class="w-full h-96 rounded-lg object-cover pr-12"/> 
            <h1 class="text-3xl my-3 font-semibold text-gray-700">Expert Guidance</h1>
            <p class="text-xl text-gray-500">You will be given personalized experts guidance. 
                Our experts will consult you, find out your problems and weeknesses and provide you a solution for it. 
                They will help you in changing your bad habits and make you adopt a healthy lifestyle.
            </p>
         </div>
         <div>
            <img :src="image4" alt="service image" class="w-full h-96 rounded-lg object-cover pr-12"/> 
            <h1 class="text-3xl my-3 font-semibold text-gray-700">Personalized Nutrition Plan</h1>
            <p class="text-xl text-gray-500">No temporary diets can reduce your body fat.
                You will be given a personalized nutrition plan that suits your needs and choices. 
                We will guide you, what exactly you are supposed to eat everyday.
                You need not to worry about the calories. Once you enrolled in this program,
                it will be our responsibility to count your calories not yours
            </p>
         </div>
         <div>
            <img :src="image5" alt="service image" class="w-full h-96 rounded-lg object-cover pr-12"/> 
            <h1 class="text-3xl my-3 font-semibold text-gray-700">Results</h1>
            <p class="text-xl text-gray-500">At last the only thing that matters is what you do, CONSISTENTLY!! Only action can create change. 
                The only thing that we want from your side is…. Consistency. That's it.
                Rest, we will take care of. We will make you fitter and by the end of 90 days, you yourself will see the good changes.
            </p>
         </div>
       </div>
    </div>
    <div>
      <h1 class="text-5xl font-bold text-gray-900 mt-12">How It Actually<span class="text-[#FED233]">Works ?</span></h1> 
      <p class="text-gray-600 text-2xl font-normal pr-72">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div class="grid grid-cols-12 ">
        <div class="col-span-7 mt-12 h-[750px] mb-20 w-full bg-[#FED233] relative z-0 pl-16 pr-28 pt-6">
          <div class="text-center bg-white opacity-60  px-4">
            <h1 class="text-4xl my-4  font-semibold text-gray-700">Expert Guidance</h1>
            <p class="text-xl text-gray-500">You will be given personalized experts guidance. 
                Our experts will consult you, find out your problems and weeknesses and provide you a solution for it. 
                They will help you in changing your bad habits and make you adopt a healthy lifestyle.
            </p>
          </div>
          <div class="text-center bg-white opacity-60  px-4">
            <h1 class="text-4xl my-4  font-semibold text-gray-700">Expert Guidance</h1>
            <p class="text-xl text-gray-500">You will be given personalized experts guidance. 
                Our experts will consult you, find out your problems and weeknesses and provide you a solution for it. 
                They will help you in changing your bad habits and make you adopt a healthy lifestyle.
            </p>
          </div>
          <div class="text-center bg-white opacity-60  px-4">
            <h1 class="text-4xl my-4  font-semibold text-gray-700">Expert Guidance</h1>
            <p class="text-xl text-gray-500">You will be given personalized experts guidance. 
                Our experts will consult you, find out your problems and weeknesses and provide you a solution for it. 
                They will help you in changing your bad habits and make you adopt a healthy lifestyle.
            </p>
          </div>
          <div class="text-center bg-white opacity-60 px-4">
            <h1 class="text-3xl my-3 font-semibold text-gray-700">Expert Guidance</h1>
            <p class="text-xl text-gray-500">You will be given personalized experts guidance. 
                Our experts will consult you, find out your problems and weeknesses and provide you a solution for it. 
                They will help you in changing your bad habits and make you adopt a healthy lifestyle.
            </p>
          </div>
        </div>
        <div class="bg-white relative col-span-5 mt-20 -ml-16 h-[695px] z-30 shadow-2xl text-center px-12">
          <h1 class="text-[40px] font-semibold px-8 text-gray-700 mt-6">Get In Touch with <span class="text-[#FED233]">Evolve Your Life Style</span> Today</h1>
          <div class="pl-20 items-center">
            <div class="bg-[#FED233] h-[390px] w-[390px] mt-12"></div>
            <button @click="navigateToContact" class="bg-gray-500 text-white cursor-pointer mt-8 hover:bg-slate-950 transition-transform duration-200 ease-in-out hover:scale-95 h-12 px-8 rounded-md"> Contact Us </button>
            <img :src="image6" alt="trainer" class="w-96 h-96 -mt-[520px]" />
        </div>
        </div>
      </div>
    </div>

    <div>
      <h1 class="text-[40px] font-semibold px-8 text-gray-700 my-3">Your <span class="text-[#FED233]">Journey Of Transformation</span> Today</h1>
    </div>
  </div>
</template>

<script setup>
import image2 from '@/assets/photos/image1.png'
import image3 from '@/assets/photos/image2.png'
import image4 from '@/assets/photos/image3.png'
import image5 from '@/assets/photos/image4.png'
import image6 from '@/assets/photos/trainer.png'
import Corousel from '@/components/Corousel.vue'
import image1 from '@/assets/photos/boss.png'
import { useRouter } from 'vue-router'
import { UserIcon, FileBarChart, FileCheck } from 'lucide-vue-next'
const router = useRouter()
const navigateToContact = () => router.push('/contact')
</script>
