<script setup lang="ts">
const props = defineProps<{ error: { statusCode?: number; message?: string } }>()
const route = useRoute()
const source = route.query.source
</script>

<template>
  <NuxtLayout :name="props.error.statusCode === 404 ? '404' : 'default'">
    <div class="text-center">
      <div class="mb-12" v-if="props.error.statusCode === 404">
        <h1 class="text-9xl font-bold text-dark">404</h1>
        <p class="text-4xl font-light text-dark">Not Found</p>
        <div class="my-6" v-if="route.query.source === 'shlink'">
          <div class="w-full flex justify-center">
            <hr class="border-dark border-t-[0.5px] border-b-0 pb-2 w-16">
          </div>
          <p class=" text-dark">
            Shlink link does not exist (anymore). Ask the sender to get a new one.
          </p>
          <div class="w-full flex justify-center">
            <hr class="border-dark border-b-[0.5px] border-t-0 pt-2 w-16">
          </div>
        </div>

      </div>

      <div class="mb-12" v-if="props.error.statusCode !== 404">
        <h1 class="text-6xl font-bold text-dark">An Error Occur</h1>
        <p v-if="props.error.statusCode === 404" class="opacity-80 mb-6 text-dark">
          {{ props.error.message }}
        </p>
      </div>

      <NuxtLink
          to="/"
          class="mt-64 px-4 py-2 bg-white rounded-lg shadow hover:bg-gray-100 transition"
      >
        Go Home
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>
