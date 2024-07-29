<script setup lang="ts">
import {ArrowRightIcon, EyeIcon, EyeSlashIcon} from "@heroicons/vue/24/outline";
import getTailwindColor from "~/utils/get-tailwind-color";
import {AppAlert} from "#components";

const showContent = ref(false)
const uploadDriveUrl = ref("")
const downloadDriveUrl = ref("")
const password = ref("")
const inputPasswordFieldType = ref("password")
const btnPasswordShowIcon = ref(EyeIcon)
const showLoadingBanner = ref(false)
const colorDark = getTailwindColor("text-dark") as string
const colorLight = getTailwindColor("text-light") as string
const submitBtnFocused = ref(false)
const submitBtnHovered = ref(false)
const loadingAnimationColor = ref(colorDark)
const alerts = ref([] as Alert[])
const ifPasswordIsEmpty = computed((): boolean => {
  return password.value === ""
})

function setLoadingAnimationColor() {
  if (submitBtnFocused.value && submitBtnHovered.value) return loadingAnimationColor.value = colorDark
  if (submitBtnFocused.value && !submitBtnHovered.value) return loadingAnimationColor.value = colorDark
  if (!submitBtnFocused.value && submitBtnHovered.value) return loadingAnimationColor.value = colorDark
  if (!submitBtnFocused.value && !submitBtnHovered.value) return loadingAnimationColor.value = colorLight
}

function invertPasswordType() {
  if (inputPasswordFieldType.value === "password") return inputPasswordFieldType.value = "text"
  if (inputPasswordFieldType.value === "text") return inputPasswordFieldType.value = "password"
}

function invertPasswordIcon() {
  if (btnPasswordShowIcon.value === EyeIcon) return btnPasswordShowIcon.value = EyeSlashIcon
  if (btnPasswordShowIcon.value === EyeSlashIcon) return btnPasswordShowIcon.value = EyeIcon
}

async function submitPassword() {
  showLoadingBanner.value = true

  await $fetch('/api/private/drive', {
    method: 'post',
    body: {password: password.value}
  })
      .then((body) => {
        uploadDriveUrl.value = body.uploadUrl
        downloadDriveUrl.value = body.downloadUrl

        addAlert("success", "Password was correct.")
        showContent.value = true
      })
      .catch((error) => {
        console.log(error.data)
        console.log(error.data.message)
        addAlert("error", error.data.message)
        // addAlert("error", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,")
        // addAlert("error", "Lorem ipsum dolor sit amet, ")
        // addAlert("error", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore")
      });

  showLoadingBanner.value = false
}

function addAlert(type: "success" | "warning" | "error" | "info", message: string) {
  alerts.value.push({type: type, message: message})
}

function removeAlert(index: number) {
  alerts.value.splice(index, 1)
}

interface Alert {
  type: "success" | "warning" | "error" | "info"
  message: string
}

</script>

<template>
  <div id="alert-store" class="w-full h-0 flex justify-end">
    <app-alert
        v-for="(alert, index) in alerts"
        :message="alert.message"
        :type="alert.type"
        :index="index"
        @close="removeAlert(index)"
    ></app-alert>
  </div>
  <div v-if="!showContent" class="w-full h-screen bg-light">
    <div class="w-full h-full flex items-center justify-center flex-col md:flex-row">
      <div class="relative">
        <label for="password" class="hidden rounded-lg absolute -top-[11px] left-3 px-1 text-sm font-medium text-dark"
               v-show="!ifPasswordIsEmpty">Password</label>
        <input :type="inputPasswordFieldType" v-model="password" name="password" id="password"
               v-on:keyup.enter="submitPassword"
               class="block border-0 py-1.5 text-dark shadow-sm sm:text-sm sm:leading-6 p-4 w-64 rounded-lg placeholder:text-light focus:outline-0 focus:ring-2 focus:ring-dark"
               placeholder="Enter the password"/>
        <div class="absolute inset-y-0 right-0 flex items-center">
          <button @click="invertPasswordType(); invertPasswordIcon()"
                  class="rounded-md border-0 bg-transparent py-0 h-full px-2 text-light focus:outline-0 focus:ring-2 focus:ring-dark">
            <component :is="btnPasswordShowIcon" class="h-5 w-5 text-light" aria-hidden="true"/>
          </button>
        </div>
      </div>
      <button @click="submitPassword(); setLoadingAnimationColor()"
              @focus="submitBtnFocused = true; setLoadingAnimationColor()"
              @focusin="submitBtnFocused = true; setLoadingAnimationColor()"
              @focusout="submitBtnFocused = false; setLoadingAnimationColor()"
              @mouseover="submitBtnHovered = true; setLoadingAnimationColor()"
              @mouseout="submitBtnHovered = true; setLoadingAnimationColor()"
              @mouseenter="submitBtnHovered = true; setLoadingAnimationColor()"
              @mouseleave="submitBtnHovered = false; setLoadingAnimationColor()"
              class="h-9 w-64 md:w-9 rounded-md border-0 bg-dark text-light hover:bg-light ring-dark hover:ring-2 focus:bg-light focus:text-dark hover:text-dark ml-2 mt-4 md:mt-0 py-0 px-2 focus:outline-0 focus:ring-2 focus:ring-dark flex items-center justify-center">
        <svg v-if="showLoadingBanner" class="h-9 w-9 flex items-center justify-center flex-col"
             xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
          <circle :fill='loadingAnimationColor' :stroke='loadingAnimationColor' stroke-width='15' r='15' cx='40'
                  cy='100'>
            <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;' keySplines='.5 0 .5 1;.5 0 .5 1'
                     repeatCount='indefinite' begin='-.4'></animate>
          </circle>
          <circle :fill='loadingAnimationColor' :stroke='loadingAnimationColor' stroke-width='15' r='15' cx='100'
                  cy='100'>
            <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;' keySplines='.5 0 .5 1;.5 0 .5 1'
                     repeatCount='indefinite' begin='-.2'></animate>
          </circle>
          <circle :fill='loadingAnimationColor' :stroke='loadingAnimationColor' stroke-width='15' r='15' cx='160'
                  cy='100'>
            <animate attributeName='opacity' calcMode='spline' dur='2' values='1;0;1;' keySplines='.5 0 .5 1;.5 0 .5 1'
                     repeatCount='indefinite' begin='0'></animate>
          </circle>
        </svg>
        <ArrowRightIcon v-if="!showLoadingBanner" class="h-5 w-5" aria-hidden="true"/>
      </button>
    </div>
  </div>
  <div v-if="showContent" class="w-full h-screen bg-light">
    <div class="w-full h-full flex items-center justify-center flex-row">
      <div class="flex flex-col md:flex-row">
        <div class="mx-4">
          <h1 class="text-4xl text-dark pb-4 w-full text-center">Assets</h1>
          <div class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-4">
            <div class="flex justify-center items-center">
              <div
                  class="flex items-center justify-center bg-dark w-32 h-32 text-white border rounded-lg transform transition ease-in duration-300 hover:scale-125">
                <NuxtLink to="/images/avatar-apple.jpeg" target="_blank">
                  apple.jpeg
                </NuxtLink>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div
                  class="flex items-center justify-center bg-dark w-32 h-32 text-white border rounded-lg transform transition ease-in duration-300 hover:scale-125">
                <NuxtLink to="/images/avatar-face.png" target="_blank">
                  face.png
                </NuxtLink>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div
                  class="flex items-center justify-center bg-dark w-32 h-32 text-white border rounded-lg transform transition ease-in duration-300 hover:scale-125">
                <NuxtLink to="/images/avatar-face.svg" target="_blank">
                  face.svg
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-4">
          <h1 class="text-4xl text-dark pb-4 w-full text-center pt-8 md:pt-0">Drive</h1>
          <div class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 gap-4">
            <div class="flex justify-center items-center">
              <div
                  class="flex items-center justify-center bg-dark w-32 h-32 text-white border rounded-lg transform transition ease-in duration-300 hover:scale-125">
                <NuxtLink :to="uploadDriveUrl" target="_blank" external
                          @click="useTrackEvent('drive.upload')">
                  Upload
                </NuxtLink>
              </div>
            </div>
            <div class="flex justify-center items-center">
              <div
                  class="flex items-center justify-center bg-dark w-32 h-32 text-white border rounded-lg transform transition ease-in duration-300 hover:scale-125">
                <NuxtLink :to="downloadDriveUrl" target="_blank" external
                          @click="useTrackEvent('drive.download')">
                  Download
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