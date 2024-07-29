<script setup lang="ts">
const keyDocumentationUrl = ref("https://mattiamueggler.notion.site/Security-f764da9110dd45d5bcdfd3736cd40b45")
</script>

<template>
  <div class="w-full h-screen bg-light">
    <div class="w-full h-full flex items-center justify-center flex-row">
      <div class="flex flex-col md:flex-row">
        <div class="mx-4">
          <h1 class="text-4xl text-dark pb-4 w-full text-center">
            <NuxtLink class="cursor-pointer flex flex-row" :to="keyDocumentationUrl" external target="_blank">RSA <span
                class="pl-2 transform transition ease-in duration-300 hover:scale-125">&#128214;</span></NuxtLink>
          </h1>
          <div class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-4">
            <div class="flex justify-center items-center">
              <div
                  class="flex items-center justify-center bg-dark w-32 h-32 text-white border rounded-lg transform transition ease-in duration-300 hover:scale-125">
                <NuxtLink to="/keys/mattiamueggler_public_key.pem" target="_blank"
                          @click="useTrackEvent('security.rsa.pem')">
                  RSA.pem
                </NuxtLink>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div
                  class="flex items-center justify-center bg-dark w-32 h-32 text-white border rounded-lg transform transition ease-in duration-300 hover:scale-125">
                <NuxtLink to="/keys/mattiamueggler_public_key.txt" target="_blank"
                          @click="useTrackEvent('security.rsa.txt')">
                  RSA.txt
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-4">
          <h1 class="text-4xl text-dark pb-4 w-full text-center pt-8 md:pt-0">
            <NuxtLink class="cursor-pointer flex flex-row" :to="keyDocumentationUrl" external target="_blank">PGP <span
                class="pl-2 transform transition ease-in duration-300 hover:scale-125">&#128214;</span></NuxtLink>
          </h1>
          <div class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-4">
            <div class="flex justify-center items-center">
              <div
                  class="flex items-center justify-center bg-dark w-32 h-32 text-white border rounded-lg transform transition ease-in duration-300 hover:scale-125">
                <NuxtLink to="/keys/mattia-at-mattiamueggler-ch_public.key" target="_blank"
                          @click="useTrackEvent('security.pgp.key')">
                  PGP.key
                </NuxtLink>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div
                  class="flex items-center justify-center bg-dark w-32 h-32 text-white border rounded-lg transform transition ease-in duration-300 hover:scale-125">
                <NuxtLink to="/keys/mattia-at-mattiamueggler-ch_public.txt" target="_blank"
                          @click="useTrackEvent('security.pgp.txt')">
                  PGP.txt
                </NuxtLink>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div
                  class="flex items-center justify-center bg-dark w-32 h-32 text-white border rounded-lg transform transition ease-in duration-300 hover:scale-125">
                <NuxtLink external to="https://keys.openpgp.org/search?q=mattia%40mattiamueggler.ch" target="_blank"
                          @click="useTrackEvent('security.gpg.openpgp')">
                  OpenPGP
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-4">
          <h1 class="text-4xl text-dark pb-4 w-full text-center pt-8 md:pt-0">
            <NuxtLink class="cursor-pointer flex flex-row" :to="keyDocumentationUrl" external target="_blank">S/MIME
              <span class="pl-2 transform transition ease-in duration-300 hover:scale-125">&#128214;</span></NuxtLink>
          </h1>
          <div class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-4">
            <div class="flex justify-center items-center">
              <div
                  class="flex items-center justify-center bg-dark w-32 h-32 text-white border rounded-lg transform transition ease-in duration-300 hover:scale-125">
                <NuxtLink to="/keys/mattia-at-mattiamueggler-ch_smime-public.crt" target="_blank"
                          @click="useTrackEvent('security.smime.cert')">
                  S/MIME.cert
                </NuxtLink>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div
                  class="flex items-center justify-center bg-dark w-32 h-32 text-white border rounded-lg transform transition ease-in duration-300 hover:scale-125">
                <NuxtLink to="/keys/mattia-at-mattiamueggler-ch_smime-public.txt" target="_blank"
                          @click="useTrackEvent('security.smime.txt')">
                  S/MIME.txt
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>