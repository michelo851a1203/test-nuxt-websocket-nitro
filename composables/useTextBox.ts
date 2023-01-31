export type BaseTextBoxType = string | number;

export type BaseTextPropsType = {
  content: BaseTextBoxType;
}

export type BaseTextEmitsType = {
  (event: 'update:content', content: BaseTextBoxType): void;
}

export type useTextBoxOptionsType = {
  props: Readonly<BaseTextPropsType>;
  emit: BaseTextEmitsType;
}
export const useTextBox = (options: useTextBoxOptionsType) => {
  const { emit } = options;
  const inputListener = (event: InputEvent) => {
    const inputElement = event.target as HTMLInputElement;
    emit('update:content', inputElement.value);
  }

  return {
    inputListener,
  }
}
