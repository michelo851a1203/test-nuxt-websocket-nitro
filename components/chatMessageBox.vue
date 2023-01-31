<script setup lang="ts">
type ChatMessageBoxPropsType = {
  isSender?: boolean;
  userName?: string;
  belowDateLabel?: string;
}

const props = withDefaults(defineProps<ChatMessageBoxPropsType>(), {
  userName: '',
  isSender: false,
  belowDateLabel: '',
});

</script>
<template>
  <section
    :before="userName"
    :after="belowDateLabel"
    class="
      w-2/5 min-w-32 border box-border px-3 py-2 relative
      after:content-[attr(after)] after:absolute after:bottom-2 after:text-sm
    "
    :class="{
      'before:content-[attr(before)] before:absolute before:-top-4 after:-right-20': !isSender,
      'self-end after:-left-20': isSender,
    }"
  >
    <div
      class="w-full border rounded-2xl box-border px-3 py-2 break-all leading-loose"
      :class="{
        'bg-gray-100 text-black': isSender,
        'bg-gray-700 text-white': !isSender,
      }"
    >
      <slot></slot>
    </div>
  </section>
</template>
