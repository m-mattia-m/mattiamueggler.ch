<script setup lang="ts">
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XMarkIcon
} from '@heroicons/vue/20/solid'

const props = defineProps({
  message: {
    type: String,
    default: 'Message',
    required: true,
  },
  type: {
    type: String as PropType<"success" | "warning" | "error" | "info">,
    default: 'Message',
    required: true,
  },
  index: {
    type: Number,
    default: 0,
    required: true,
  }
})
const emit = defineEmits(['close'])

const closeAlertRef = ref(false)

onMounted(() => {
  setTimeout(() => {
    closeAlert()
  }, 2000)
})

function closeAlert() {
  closeAlertRef.value = true
  setTimeout(() => {
    emit("close")
  }, 1400)
}

</script>

<template>
  <div ref="alertElement" class="fixed px-2 pt-2 md:pl-2 md:pt-2 w-full md:w-96">
    <div class="alert-toast z-100 rounded-md p-4 bg-dark mb-2"
         :class="{ 'alert-toast-hide': closeAlertRef }">
      <div class="flex">
        <div class="flex-shrink-0">
          <CheckCircleIcon v-if="props.type === 'success'" class="h-5 w-5 text-light" aria-hidden="true"/>
          <ExclamationCircleIcon v-if="props.type === 'warning'" class="h-5 w-5 text-light" aria-hidden="true"/>
          <ExclamationTriangleIcon v-if="props.type === 'error'" class="h-5 w-5 text-light" aria-hidden="true"/>
          <InformationCircleIcon v-if="props.type === 'info'" class="h-5 w-5 text-light" aria-hidden="true"/>
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-light md:w-xl">{{ props.message }}</p>
        </div>
        <div class="ml-auto pl-3">
          <div class="-mx-1.5 -my-1.5">
            <button type="button" @click="closeAlert()"
                    class="inline-flex rounded-md bg-dark p-1.5 text-light hover:bg-dark focus:outline-none focus:ring-2 focus:ring-dark focus:ring-offset-2 focus:ring-offset-dark">
              <XMarkIcon class="h-5 w-5" aria-hidden="true"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.alert-toast {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.alert-toast-hide {
  -webkit-animation: fade-out-right 1.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: fade-out-right 1.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(calc(100vw + 100%));
    transform: translateX(calc(100vw + 100%));
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(calc(100vw + 100%));
    transform: translateX(calc(100vw + 100%));
    opacity: 0;
  }

  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes fade-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(calc(100vw + 100%));
    transform: translateX(calc(100vw + 100%));
    opacity: 0;
  }
}

@keyframes fade-out-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }

  100% {
    -webkit-transform: translateX(calc(100vw + 100%));
    transform: translateX(calc(100vw + 100%));
    opacity: 0;
  }
}

</style>