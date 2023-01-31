export type UseBaseButtonPropsType = {
  isRound?: boolean;
  isAngle?: boolean;
}

export type UseBaseButtonEmitType = {
  (event: 'update:click'): void;
}

export type UseBaseButtonOptionsType = {
  props: Readonly<UseBaseButtonPropsType>;
  emit: UseBaseButtonEmitType;
}

export const useBaseButton = (options: UseBaseButtonOptionsType) => {
  const { emit } = options;
  const clickListener = () => {
    emit('update:click')
  }
  return {
    clickListener,
  }
}
