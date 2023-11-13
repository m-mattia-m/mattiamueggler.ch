<template>
  <div class="h-screen w-full bg-[#90E0EF] flex justify-center items-center flex-col sm:flex-row ">
    <span class="w-8 h-8 sm:w-16 sm:h-16"></span>
    <div
        class="bg-[#134074] text-white p-4 sm:p-8 border rounded-lg transform transition ease-in duration-300 hover:scale-125">
      <a href="https://github.com/m-mattia-m" target="_blank" @click="useTrackEvent('github')">
        <Github :fontControlled="false" :filled="true" class="h-14 w-14 sm:h-12 sm:w-12"/>
      </a>
    </div>
    <span class="w-8 h-8 sm:w-16 sm:h-16"></span>
    <div
        class="bg-[#134074] text-white p-4 sm:p-8 border rounded-lg transform transition ease-in duration-300 hover:scale-125">
      <a href="https://www.linkedin.com/in/mattia-müggler/" target="_blank" @click="useTrackEvent('linkedin')">
        <Linkedin :fontControlled="false" :filled="true" class="h-14 w-14 sm:h-12 sm:w-12"/>
      </a>
    </div>
    <span class="w-8 h-8 sm:w-16 sm:h-16"></span>
    <div
        class="bg-[#134074] text-white p-4 sm:p-8 border rounded-lg transform transition ease-in duration-300 hover:scale-125">
      <a href="https://bento.me/mattiamueggler" target="_blank" @click="useTrackEvent('bento')">
        <Squares :fontControlled="false" :filled="true" class="h-14 w-14 sm:h-12 sm:w-12"/>
      </a>
    </div>
    <span class="w-8 h-8 sm:w-16 sm:h-16"></span>
    <div
        class="bg-[#134074] text-white p-4 sm:p-8 border rounded-lg transform transition ease-in duration-300 hover:scale-125">
      <a href="https://github.com/m-mattia-m/notify/" target="_blank" @click="useTrackEvent('notify')">
        <Formtion :fontControlled="false" :filled="true" class="h-14 w-14 sm:h-12 sm:w-12"/>
      </a>
    </div>
    <span class="w-8 h-8 sm:w-16 sm:h-16"></span>
    <div
        class="bg-[#134074] text-white p-4 sm:p-8 border rounded-lg transform transition ease-in duration-300 hover:scale-125">
      <a href="https://formtion.app" target="_blank" @click="useTrackEvent('formtion')">
        <Bars :fontControlled="false" :filled="true" class="h-14 w-14 sm:h-12 sm:w-12"/>
      </a>
    </div>
    <span class="w-8 h-8 sm:w-16 sm:h-16"></span>
  </div>
  <a href="mailto:hi@mattiamueggler.ch"
     class="text-[#134074] bottom-3 absolute w-full text-center">hi@mattiamueggler.ch</a>
</template>

<script lang="ts" setup>
import Github from "~/public/icons/github.svg";
import Linkedin from "~/public/icons/linkedin.svg";
import Squares from "~/public/icons/squares.svg";
import Formtion from "~/public/icons/formtion.svg";
import Bars from "~/public/icons/bars.svg";
</script>