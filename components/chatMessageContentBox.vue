<script setup lang="ts">
const {
  filterDateInformationMessageArray,
} = useChatMessageContentBox();

</script>
<template>
  <article class="w-full px-6  h-11/12 flex items-center box-border">
    <section 
      class="bg-gray-500 w-full h-11/12 rounded-2xl space-y-8 flex flex-col px-8 py-6 overflow-y-auto"
    >
      <chatMessageBox
        v-for="informationMessage in filterDateInformationMessageArray"
        :key="informationMessage.id"
        :isSender="informationMessage.isSender"
        :userName="informationMessage.name"
        :belowDateLabel="informationMessage.messageDate"
      >
        {{ informationMessage.message }}
      </chatMessageBox>
    </section>
  </article>
</template>
