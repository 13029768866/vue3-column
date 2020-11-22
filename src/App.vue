<template>
  <div class="container">
    <global-header :user="user"></global-header>
    <!--    <column-list :list="list"></column-list>-->
    <form action="">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input
          v-model="emailVal"
          :rules="emailRules"
          placeholder="请输入账号"
        ></validate-input>
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input
          v-model="emailVal"
          :rules="emailRules"
          type="password"
          placeholder="请输入密码"
        ></validate-input>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnProps } from "@/components/ColumnList.vue";
import GlobalHeader, { UserProps } from "@/components/GlobalHeader.vue";
import ValidateInput, { RulesProp } from "@/components/ValidateInput.vue";

const currentUser: UserProps = {
  isLogin: true,
  name: "木剑游侠"
};
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "test1的专栏",
    description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  },
  {
    id: 2,
    title: "test2的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  },
  {
    id: 3,
    title: "test3的专栏",
    description: "这是的test1专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar:
      "http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100"
  },
  {
    id: 4,
    title: "test4的专栏",
    description: "这是的test2专栏，有一段非常有意思的简介，可以更新一下欧",
    avatar: ""
  }
];

export default defineComponent({
  name: "App",
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput
  },
  setup() {
    const emailVal = ref("");
    const emailRules: RulesProp = [
      { type: "required", message: "电子邮箱地址不能为空" },
      { type: "email", message: "请输入正确的电子邮箱格式" }
    ];

    return {
      list: testData,
      user: currentUser,
      emailRules,
      emailVal
    };
  }
});
</script>

<style></style>
