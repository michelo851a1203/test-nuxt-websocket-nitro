<script setup lang="ts">
type BaseTextBoxType = string | number;

type BaseTextPropsType = {
  content: BaseTextBoxType;
  placeHolder?: string;
  readOnly?: boolean;
}

type BaseTextEmitsType = {
  (event: 'update:content', content: BaseTextBoxType): void;
}

const props = withDefaults(defineProps<BaseTextPropsType>(), {
  content: '',
  placeholder: '',
  readOnly: false,
});

const emit = defineEmits<BaseTextEmitsType>()

const {
  inputListener,
} = useTextBox({ props, emit })

</script>

<template>
  <input
    v-if="!readOnly"
    @input="inputListener"
    class="px-3 py-2 border-none rounded-xl bg-gray-400 focus:bg-gray-100 focus:outline-none box-border placeholder:text-gray-600"
    :placeholder="placeHolder"
    type="text"
    :value="content"
  >
  <div 
    v-else
  >
    {{ content }}
  </div>
</template>
