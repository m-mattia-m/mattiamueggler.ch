<script setup lang="ts">

</script>

<template>
<div class="p-4">
  <h1 class="text-3xl">Keys</h1>
  <p class="pt-4">
    <NuxtLink to="/information/usage" class="text-blue-800">How to use RSA or PGP public keys to encrypt messages or files.</NuxtLink>
  </p>
  <p class="pt-4">
    This is my public RSA key to encrypt files or to communicate with me.
  </p>
  <ul class="list-disc list-inside">
    <li><NuxtLink external to="/keys/mattiamueggler_public_key.pem" class="text-blue-800">/keys/mattiamueggler_public_key.pem</NuxtLink></li>
    <li><NuxtLink external to="/keys/mattiamueggler_public_key.txt" class="text-blue-800">/keys/mattiamueggler_public_key.txt</NuxtLink></li>
  </ul>
  <p class="pt-4">
    This is my public PGP key to encrypt files or to communicate with me.
  </p>
  <ul class="list-disc list-inside">
    <li><NuxtLink external to="/keys/mattia-at-mattiamueggler-ch_public.key" class="text-blue-800">mattia-at-mattiamueggler-ch_public.key</NuxtLink></li>
    <li><NuxtLink external to="/keys/mattia-at-mattiamueggler-ch_public.txt" class="text-blue-800">mattia-at-mattiamueggler-ch_public.txt</NuxtLink></li>
    <li><NuxtLink external to="https://keys.openpgp.org/search?q=mattia%40mattiamueggler.ch" class="text-blue-800">keys.openpgp.org</NuxtLink></li>
  </ul>
  <p class="pt-4">
    This is my public S/MIME certificate to encrypt mails to communicate with me.
  </p>
  <ul class="list-disc list-inside">
    <li><NuxtLink external to="/keys/mattia-at-mattiamueggler-ch_smime-public.crt" class="text-blue-800">mattia-at-mattiamueggler-ch_smime-public.crt</NuxtLink></li>
    <li><NuxtLink external to="/keys/mattia-at-mattiamueggler-ch_smime-public.txt" class="text-blue-800">mattia-at-mattiamueggler-ch_smime-public.txt</NuxtLink></li>
  </ul>

  <h1 class="text-3xl pt-10 pb-2">Images</h1>
  <ul class="list-disc list-inside">
    <li><NuxtLink external to="/images/apple-avatar.jpeg" class="text-blue-800">apple-avatar.jpeg</NuxtLink></li>
    <li><NuxtLink external to="/images/avatar-face.png" class="text-blue-800">avatar-face.png</NuxtLink></li>
    <li><NuxtLink external to="/images/avatar-face.svg" class="text-blue-800">avatar-face.svg</NuxtLink></li>
  </ul>
</div>
</template>

<style scoped lang="scss">

</style>