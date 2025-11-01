<template>
  <div class="w-full h-screen bg-light">
    <div class="w-full h-full flex items-center justify-center">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div class="flex justify-center items-center">
          <div
              class="bg-dark text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://cv.mattiamueggler.ch" target="_blank" @click="useTrackEvent('cv')">
              <img src="/public/icons/cv.svg" class="h-14 w-14" alt="CV">
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-dark text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://github.com/m-mattia-m" target="_blank" @click="useTrackEvent('github')" aria-label="Github">
              <img src="/public/icons/github.svg" class="h-14 w-14" alt="Github">
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-dark text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://www.linkedin.com/in/mattia-mueggler" target="_blank" @click="useTrackEvent('linkedin')" aria-label="LinkedIn">
              <img src="/public/icons/linkedin.svg" class="h-14 w-14" alt="LinkedIn">
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-dark text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://bento.me/mattiamueggler" target="_blank" @click="useTrackEvent('bento')" aria-label="Bento">
              <img src="/public/icons/bento.svg" class="h-14 w-14" alt="Bento">
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-dark text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://blog.mattiamueggler.ch" target="_blank" @click="useTrackEvent('blog')" aria-label="Blog">
              <img src="/public/icons/blog.svg" class="h-14 w-14" alt="Blog">
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-dark text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://github.com/m-mattia-m/notify/" target="_blank" @click="useTrackEvent('notify')" aria-label="Notify">
              <img src="/public/icons/bars.svg" class="h-14 w-14" alt="Notify">
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-dark text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink :external="true" to="https://formtion.app" target="_blank" @click="useTrackEvent('formtion')"  aria-label="Formtion">
              <img src="/public/icons/formtion.svg" class="h-14 w-14" alt="Formtion">
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-dark text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink external target="_blank" to="https://mattiamueggler.notion.site" @click="useTrackEvent('notion')" aria-label="Notion">
              <img src="/public/icons/notion.svg" class="h-14 w-14" alt="Notion">
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-dark text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink to="/security" @click="useTrackEvent('security')" aria-label="Security">
              <img src="/public/icons/key.svg" class="h-14 w-14" alt="Key">
            </NuxtLink>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <div
              class="bg-dark text-white w-32 h-32 flex items-center justify-center border rounded-lg transform transition ease-in duration-300 hover:scale-125">
            <NuxtLink to="/drive" @click="useTrackEvent('drive')" aria-label="Drive">
              <img src="/public/icons/drive.svg" class="h-14 w-14" alt="Drive">
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <NuxtLink to="mailto:hi@mattiamueggler.ch"
       class="flex justify-center items-center w-full text-dark bg-light py-4 mt-[-60px] text-center">hi@mattiamueggler.ch</NuxtLink>
  </div>
</template>

<script lang="ts" setup>
</script>