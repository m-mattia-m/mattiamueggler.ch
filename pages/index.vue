<template>
  <div class="w-full h-screen bg-[#90E0EF]">
    <div class="w-full h-full flex items-center justify-center">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div class="flex justify-center items-center">
          <div
              class="bg-[#134074] text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://cv.mattiamueggler.ch" target="_blank" @click="useTrackEvent('cv')">
              <CV :fontControlled="false" :filled="true" class="h-14 w-14 text-white"/>
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-[#134074] text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://github.com/m-mattia-m" target="_blank" @click="useTrackEvent('github')" aria-label="Github">
              <Github :fontControlled="false" :filled="true" class="h-14 w-14"  alt="Github"/>
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-[#134074] text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://www.linkedin.com/in/mattia-mueggler" target="_blank" @click="useTrackEvent('linkedin')" aria-label="LinkedIn">
              <Linkedin :fontControlled="false" :filled="true" class="h-14 w-14"  alt="LinkedIn"/>
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-[#134074] text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://bento.me/mattiamueggler" target="_blank" @click="useTrackEvent('bento')" aria-label="Bento">
              <Bento :fontControlled="false" :filled="true" class="h-14 w-14"  alt="Bento"/>
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-[#134074] text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://blog.mattiamueggler.ch" target="_blank" @click="useTrackEvent('blog')" aria-label="Blog">
              <Blog :fontControlled="false" :filled="true" class="h-14 w-14"  alt="Blog"/>
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-[#134074] text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://github.com/m-mattia-m/notify/" target="_blank" @click="useTrackEvent('notify')" aria-label="Notify">
              <Bars :fontControlled="false" :filled="true" class="h-14 w-14"  alt="Notify"/>
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-[#134074] text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://formtion.app" target="_blank" @click="useTrackEvent('formtion')"  aria-label="Formtion">
              <Formtion :fontControlled="false" :filled="true" class="h-14 w-14"  alt="Formtion"/>
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-[#134074] text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink external target="_blank" to="https://mattiamueggler.notion.site" @click="useTrackEvent('notion')" aria-label="Notion">
              <Notion :fontControlled="false" :filled="true" class="h-14 w-14"  alt="Notion"/>
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-[#134074] text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink to="/security" @click="useTrackEvent('security')" aria-label="Security">
              <Key :fontControlled="false" :filled="true" class="h-14 w-14"  alt="Key"/>
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-[#134074] text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink to="/drive" @click="useTrackEvent('drive')" aria-label="Drive">
              <Drive :fontControlled="false" :filled="true" class="h-14 w-14"  alt="Drive"/>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink to="mailto:hi@mattiamueggler.ch"
       class="absolute flex justify-center items-center w-full text-[#134074] bg-[#90E0EF] py-4 mt-[-60px] text-center">hi@mattiamueggler.ch</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import CV from "~/public/icons/cv.svg";
import Github from "~/public/icons/github.svg";
import Linkedin from "~/public/icons/linkedin.svg";
import Bento from "~/public/icons/bento.svg";
import Blog from "~/public/icons/blog.svg";
import Bars from "~/public/icons/bars.svg";
import Formtion from "~/public/icons/formtion.svg";
import Key from "~/public/icons/key.svg";
import Drive from "~/public/icons/drive.svg";
import Notion from "~/public/icons/notion.svg";
</script>