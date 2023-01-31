<script setup lang="ts">
const {
  userLock,
  userName,
} = storeToRefs(useChatRoomCoreStore());
const {
  setUserLock,
} = useChatRoomCoreStore();

const {

} = useWebsocket();
</script>
<template>
  <NuxtLayout name="header">
    <div class="flex items-center space-x-4">
    <baseTextBox
      :readOnly="userLock"
      class="w-64"
      v-model:content="userName"
      placeholder="please input your user name"
    ></baseTextBox>
    <baseButton 
      v-if="!userLock"
      @update:click="setUserLock(true)"
      theme="danger" 
      isAngle
    >
      Lock
    </baseButton>
    </div>
  </NuxtLayout>
  <NuxtLayout name="content">
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>
<style>
body {
  margin: 0;
}
</style>
