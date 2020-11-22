import { ref, onMounted, onUnmounted, Ref } from "vue";

const useClickOutSide = (elementRef: Ref<null | HTMLElement>) => {
  const isClickOutSide = ref(false);
  const handle = (e: MouseEvent) => {
    if (!elementRef.value) return;
    if (elementRef.value.contains(e.target as HTMLElement)) {
      isClickOutSide.value = false;
    } else {
      isClickOutSide.value = true;
    }
  };
  onMounted(() => {
    document.addEventListener("click", handle);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handle);
  });
  return isClickOutSide;
};

export default useClickOutSide;
