<template>
  <div class="flex flex-col md:flex-row gap-6 p-8">
    <div class="bg-[#FED233] w-full md:w-96 h-[500px] p-4 relative z-30 -mr-24 mt-24 justify-start">
      <h1 class="text-[40px] font-semibold px-8 text-gray-700 my-3">Contact Us</h1>
      <p class="text-xl text-gray-500 px-8">Give us a call</p>
      <div class="flex items-center gap-2 mt-4 px-8">
        <Phone class="text-gray-700" size="32"/>
        <p>+250 798 973 574</p>
      </div>
      <p class="px-8">Monday-Sunday</p>
      <div class="flex gap-4 mt-4 px-8">
        <Instagram class="text-gray-700" size="32"/>
        <Facebook class="text-gray-700" size="32"/>
        <Twitter class="text-gray-700" size="32"/>
      </div>
    </div>

    <div class="bg-white shadow-xl shadow-gray-400 py-24 pl-24 flex-1  rounded-md">
      <h1 class="text-[40px] font-semibold mb-6 text-gray-700">Get In Touch</h1>
      <form class="flex flex-col gap-4">
        <div>
          <label for="name" class="block text-gray-700 font-medium mb-2">Name</label>
          <input type="text" id="name" name="name" class="w-2/3 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
        </div>
        <div>
          <label for="number" class="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input type="text" id="number" name="number" class="w-2/3 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
        </div>
        <div>
          <label for="emailAddress" class="block text-gray-700 font-medium mb-2">Email Address</label>
          <input type="email" id="emailAddress" name="emailAddress" class="w-2/3 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"/>
        </div>
        <div>
          <label for="message" class="block text-gray-700 font-medium mb-2">Message</label>
          <textarea id="message" name="message" rows="4" class="w-2/3 px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
        </div>
        <button type="submit" class="bg-gray-700 w-44 h-14 text-white font-medium px-6 py-2 rounded-md hover:bg-yellow-500">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import {Phone, Instagram, Facebook, Twitter} from 'lucide-vue-next'
</script>
