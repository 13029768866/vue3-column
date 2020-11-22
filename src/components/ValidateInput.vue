<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      v-model="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <span v-if="inputRef.error" class="invalid-feedback">{{
      inputRef.message
    }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType } from "vue";
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
interface RuleProp {
  type: "required" | "email";
  message: string;
}
export type RulesProp = RuleProp[];
export default defineComponent({
  name: "ValidateInput",
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false,
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || "",
      error: false,
      message: ""
    });
    const updateValue = (e: KeyboardEvent) => {
      const targetVal = (e.target as HTMLInputElement).value;
      inputRef.val = targetVal;
      context.emit("update:modelValue", targetVal);
    };
    const validateInput = () => {
      if (props.rules) {
        const isAllPassed = props.rules.every(rule => {
          let isPassed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case "required":
              isPassed = inputRef.val.trim() !== "";
              break;
            case "email":
              isPassed = emailReg.test(inputRef.val);
              break;
            default:
              break;
          }
          return isPassed;
        });
        inputRef.error = !isAllPassed;
      }
    };
    return {
      inputRef,
      validateInput,
      updateValue
    };
  }
});
</script>

<style scoped></style>
