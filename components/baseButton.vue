<script setup lang="ts">

type BaseButtonType =  {
  isRound?: boolean;
  isAngle?: boolean;
  theme?: string;
}

const props = withDefaults(defineProps<BaseButtonType>(), {
  isRound: false,
  isAngle: false,
  theme: 'primary',
}) ;

const emit = defineEmits<{
  (event: 'update:click'): void;
}>()

const {
  clickListener,
} = useBaseButton({ props, emit });
  
</script>
<template>
  <button
    @click="clickListener"
    class="px-3 py-2 text-white  border-none cursor-pointer"
    :class="{
      'rounded-full': isRound,
      'rounded-md': isAngle,
      'bg-gray-800 hover:bg-gray-500 hover:bg-gray-500 hover:text-black': theme === 'primary',
      'bg-red-800 hover:text-white hover:bg-red-400': theme === 'danger',
    }"
  >
    <slot></slot>
  </button>
</template>
