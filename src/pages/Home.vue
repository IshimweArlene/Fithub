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
            <h1 class="text-5xl font-bold text-gray-900">Why Peaople Should Take <span class="text-[#FED233]">Health Advice</span></h1>
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
        <div>
            <h1 class="text-5xl font-bold text-gray-900">Why<span class="text-[#FED233] mt-24"> Choose Us</span></h1>
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
</template>

<script setup>
    import Corousel from '@/components/Corousel.vue'
    import image1 from '@/assets/photos/boss.png'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const navigateToContact = () => router.push('/contact')
</script>