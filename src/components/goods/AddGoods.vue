<template >
  <div>
    <el-tabs v-model="activeTab" type="card" @tab-click="handleClick">
      <el-tab-pane label="基础设置" name="tab1">
        <GoodBaseSetting></GoodBaseSetting>
      </el-tab-pane>
      <el-tab-pane label="价格库存" name="tab2">
        <GoodPriceSetting></GoodPriceSetting>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import GoodBaseSetting from '@/components/goods/GoodBaseSetting.vue'
import GoodPriceSetting from '@/components/goods/GoodPriceSetting.vue'
export default {
  data () {
    return {
      activeTab: '1'
    }
  },
  components: {
    GoodBaseSetting,
    GoodPriceSetting,

  }
}
</script>
<style >
</style>