<script setup>
const error = useError();
const properties = defineProps({
  error: Object,
});

const showErrorPage = ref(false)

onMounted(() => {
  if (properties.error.statusCode === 404) navigateTo("/")
  showErrorPage.value = true
})

</script>

<template>
    <div v-if="showErrorPage">
      <h1>Error:</h1>
      <p>It looks like something broke. - Sorry about that.</p>
      <p>{{ error.statusCode }} - {{ error.message }}</p>
    </div>
</template>