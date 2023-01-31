<script setup lang="ts">
const mainData = useState('mainData', () => '');

</script>
<template>
  <section 
    class="w-full h-16 flex items-center box-border px-6 py-4"
  >
  <baseTextBox 
    class="w-full flex-grow"
    v-model:content="mainData"
    placeholder="input message here ..."
  ></baseTextBox>
  <div class="min-w-32 flex items-center justify-center">
    <baseButton
      isAngle
    >
      send Message
    </baseButton>
  </div>
  </section>
</template>
