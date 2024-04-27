<template>
  <div class="w-full h-screen bg-[#90E0EF]">
    <div class="h-full w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <div class="flex justify-center items-center">
        <div
            class="bg-[#134074] text-white p-8 md:p-8 border rounded-lg transform transition ease-in duration-300 hover:scale-125">
          <a href="https://cv.mattiamueggler.ch" target="_blank" @click="useTrackEvent('cv')">
            <CV :fontControlled="false" :filled="true" class="h-14 w-14 text-white"/>
          </a>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div
            class="bg-[#134074] text-white p-8 md:p-8 border rounded-lg transform transition ease-in duration-300 hover:scale-125">
          <a href="https://github.com/m-mattia-m" target="_blank" @click="useTrackEvent('github')">
            <Github :fontControlled="false" :filled="true" class="h-14 w-14"/>
          </a>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div
            class="bg-[#134074] text-white p-8 md:p-8 border rounded-lg transform transition ease-in duration-300 hover:scale-125">
          <a href="https://www.linkedin.com/in/mattia-mueggler" target="_blank" @click="useTrackEvent('linkedin')">
            <Linkedin :fontControlled="false" :filled="true" class="h-14 w-14"/>
          </a>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div
            class="bg-[#134074] text-white p-8 md:p-8 border rounded-lg transform transition ease-in duration-300 hover:scale-125">
          <a href="https://bento.me/mattiamueggler" target="_blank" @click="useTrackEvent('bento')">
            <Bento :fontControlled="false" :filled="true" class="h-14 w-14"/>
          </a>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div
            class="bg-[#134074] text-white p-8 md:p-8 border rounded-lg transform transition ease-in duration-300 hover:scale-125">
          <a href="https://github.com/m-mattia-m/notify/" target="_blank" @click="useTrackEvent('notify')">
            <Bars :fontControlled="false" :filled="true" class="h-14 w-14"/>
          </a>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div
            class="bg-[#134074] text-white p-8 md:p-8 border rounded-lg transform transition ease-in duration-300 hover:scale-125">
          <a href="https://formtion.app" target="_blank" @click="useTrackEvent('formtion')">
            <Formtion :fontControlled="false" :filled="true" class="h-14 w-14"/>
          </a>
        </div>
      </div>
    </div>
    <a href="mailto:hi@mattiamueggler.ch"
       class="absolute flex justify-center items-center w-full text-[#134074] bg-[#90E0EF] py-4 mt-[-60px] text-center">hi@mattiamueggler.ch</a>
  </div>
</template>

<script lang="ts" setup>
import CV from "~/public/icons/cv.svg";
import Github from "~/public/icons/github.svg";
import Linkedin from "~/public/icons/linkedin.svg";
import Bento from "~/public/icons/bento.svg";
import Bars from "~/public/icons/bars.svg";
import Formtion from "~/public/icons/formtion.svg";
</script>