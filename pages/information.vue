<script setup lang="ts">

</script>

<template>
<div class="p-4">
  <h1 class="text-3xl">Keys</h1>
  <p>
    This is my public RSA key to encrypt files or to communicate with me.
  </p>
  <ul class="list-disc list-inside">
    <li><NuxtLink external to="/keys/mattiamueggler_public_key.pem" class="text-blue-800">/keys/mattiamueggler_public_key.pem</NuxtLink></li>
  </ul>

  <h1 class="text-2xl pb-2 pt-4">How to use RSA keys - encrypt message</h1>
  <p>Notice that the size is limited to 501 Bytes.</p>
  <ul class="list-decimal list-outside pl-5">
    <li class="py-[1px]">
      Safe your message in a file.
      <span class="p-0.5 bg-gray-300 rounded-sm">echo "Hi, this is my encrypted message" >> message.txt</span>
    </li>
    <li class="py-[1px]">
      Encrypt this file and convert it to an base64 encoded text.<br>
      <span class="p-0.5 bg-gray-300 rounded-sm">
          openssl rsautl -encrypt -inkey mattiamueggler_public_key.pem -pubin -in message.txt -out
          encrypted_message.bin && base64 -i encrypted_message.bin >> encrypted_message.txt
        </span>
    </li>
    <li class="py-[1px]">
      Print the encoded value from your file.
      <span class="p-0.5 bg-gray-300 rounded-sm">cat encrypted_message.txt`</span>
    </li>
    <li class="py-[1px]">
      <i>Send me either the value of this base64 encoded file or the file directly.</i>
    </li>
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