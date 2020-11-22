<template>
  <div>
    <el-row :gutter="15">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-col :span="7">
          <el-form-item label="单行文本" prop="mobile">
            <el-input v-model="formData.mobile" placeholder="请输入手机号" :maxlength="11" show-word-limit clearable
                      prefix-icon='el-icon-mobile' :style="{width: '100%'}"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="级联选择" prop="field101">
            <el-cascader v-model="formData.field101" :options="field101Options" :props="field101Props"
                         :style="{width: '100%'}" placeholder="请选择级联选择" clearable></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="级联选择" prop="field102">
            <el-cascader v-model="formData.field102" :options="field102Options" :props="field102Props"
                         :style="{width: '100%'}" placeholder="请选择级联选择" clearable></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="级联选择" prop="field103">
            <el-cascader v-model="formData.field103" :options="field103Options" :props="field103Props"
                         :style="{width: '100%'}" placeholder="请选择级联选择" clearable></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="级联选择" prop="field104">
            <el-cascader v-model="formData.field104" :options="field104Options" :props="field104Props"
                         :style="{width: '100%'}" placeholder="请选择级联选择" clearable></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="级联选择" prop="field105">
            <el-cascader v-model="formData.field105" :options="field105Options" :props="field105Props"
                         :style="{width: '100%'}" placeholder="请选择级联选择" clearable></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="级联选择" prop="field107">
            <el-cascader v-model="formData.field107" :options="field107Options" :props="field107Props"
                         :style="{width: '100%'}" placeholder="请选择级联选择" clearable></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
  export default {
    components: {},
    props: [],
    data() {
      return {
        formData: {
          mobile: undefined,
          field101: [],
          field102: [],
          field103: [],
          field104: [],
          field105: [],
          field107: [],
        },
        rules: {
          mobile: [{
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          }, {
            pattern: /^1(3|4|5|7|8|9)\d{9}$/,
            message: '手机号格式错误',
            trigger: 'blur'
          }],
          field101: [{
            required: true,
            type: 'array',
            message: '请至少选择一个级联选择',
            trigger: 'change'
          }],
          field102: [{
            required: true,
            type: 'array',
            message: '请至少选择一个级联选择',
            trigger: 'change'
          }],
          field103: [{
            required: true,
            type: 'array',
            message: '请至少选择一个级联选择',
            trigger: 'change'
          }],
          field104: [{
            required: true,
            type: 'array',
            message: '请至少选择一个级联选择',
            trigger: 'change'
          }],
          field105: [{
            required: true,
            type: 'array',
            message: '请至少选择一个级联选择',
            trigger: 'change'
          }],
          field107: [{
            required: true,
            type: 'array',
            message: '请至少选择一个级联选择',
            trigger: 'change'
          }],
        },
        field101Options: [],
        field102Options: [],
        field103Options: [],
        field104Options: [],
        field105Options: [],
        field107Options: [],
        field101Props: {
          "multiple": false,
          "label": "label",
          "value": "value",
          "children": "children"
        },
        field102Props: {
          "multiple": false,
          "label": "label",
          "value": "value",
          "children": "children"
        },
        field103Props: {
          "multiple": false,
          "label": "label",
          "value": "value",
          "children": "children"
        },
        field104Props: {
          "multiple": false,
          "label": "label",
          "value": "value",
          "children": "children"
        },
        field105Props: {
          "multiple": false,
          "label": "label",
          "value": "value",
          "children": "children"
        },
        field107Props: {
          "multiple": false,
          "label": "label",
          "value": "value",
          "children": "children"
        },
      }
    },
    computed: {},
    watch: {},
    created() {
      this.getField101Options()
      this.getField102Options()
      this.getField103Options()
      this.getField104Options()
      this.getField105Options()
      this.getField107Options()
    },
    mounted() {},
    methods: {
      submitForm() {
        this.$refs['elForm'].validate(valid => {
          if (!valid) return
          // TODO 提交表单
        })
      },
      resetForm() {
        this.$refs['elForm'].resetFields()
      },
      getField101Options() {
        // 注意：this.$axios是通过Vue.prototype.$axios = axios挂载产生的
        this.$axios({
          method: 'get',
          url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList'
        }).then(resp => {
          var {
            data
          } = resp
          this.field101Options = data.list
        })
      },
      getField102Options() {
        // 注意：this.$axios是通过Vue.prototype.$axios = axios挂载产生的
        this.$axios({
          method: 'get',
          url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList'
        }).then(resp => {
          var {
            data
          } = resp
          this.field102Options = data.list
        })
      },
      getField103Options() {
        // 注意：this.$axios是通过Vue.prototype.$axios = axios挂载产生的
        this.$axios({
          method: 'get',
          url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList'
        }).then(resp => {
          var {
            data
          } = resp
          this.field103Options = data.list
        })
      },
      getField104Options() {
        // 注意：this.$axios是通过Vue.prototype.$axios = axios挂载产生的
        this.$axios({
          method: 'get',
          url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList'
        }).then(resp => {
          var {
            data
          } = resp
          this.field104Options = data.list
        })
      },
      getField105Options() {
        // 注意：this.$axios是通过Vue.prototype.$axios = axios挂载产生的
        this.$axios({
          method: 'get',
          url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList'
        }).then(resp => {
          var {
            data
          } = resp
          this.field105Options = data.list
        })
      },
      getField107Options() {
        // 注意：this.$axios是通过Vue.prototype.$axios = axios挂载产生的
        this.$axios({
          method: 'get',
          url: 'https://www.fastmock.site/mock/f8d7a54fb1e60561e2f720d5a810009d/fg/cascaderList'
        }).then(resp => {
          var {
            data
          } = resp
          this.field107Options = data.list
        })
      },
    }
  }

</script>
<style>
</style>
