<template >
  <div class="content-container">
    <!-- input -->
    <div>
      <!-- 第一行 -->
      <el-container>
        <div class="input-tip">商品名称:</div>
        <div class="input-field">
          <el-input v-model="queryParams.name"></el-input>
        </div>
        <div class="input-tip">商品编号:</div>
        <div class="input-field">
          <el-input v-model="queryParams.id"></el-input>
        </div>
        <div class="input-tip">商品分类:</div>
        <div class="input-field">
          <el-select v-model="queryParams.category" placeholder="请选择分类">
            <el-option
              v-for="item in categorys"
              :key="item"
              :label="item"
              :value="item"
              :disabled="item"
            />
          </el-select>
        </div>
      </el-container>
      <!-- 第二行 -->
      <el-container>
        <div class="input-tip">是否上架:</div>
        <div class="input-field">
          <el-select v-model="sellModeString">
            <el-option key="0" label="否" value="0"></el-option>
            <el-option key="1" label="是" value="1"></el-option>
            <el-option key="2" label="全部" value="2"></el-option>
          </el-select>
        </div>
        <div  class="input-tip">是否过期</div>
        <div>
          <el-select v-model="expModeString">
            <el-option key="0" label="否" value="0"></el-option>
            <el-option key="1" label="是" value="1"></el-option>
            <el-option key="2" label="全部" value="2"></el-option>
          </el-select>
        </div>
      </el-container>
    </div>
    <!-- button -->
    <div>
      <el-container>
        <el-button type="primary" @click="requestData">检索</el-button>
        <el-button type="primary" @click="clear">显示全部</el-button>
        <el-button type="success" @click="addGoods">新增商品</el-button>
      </el-container>
    </div>
    <!-- table -->
    <el-table :data="goodsData" style="width: 100%">
      <el-table-column prop="date" label="商品" width="100">
        <template #default="scope">
          <div style="text-align: center">
            <el-image :src="scope.row.img"></el-image>
            <span style="text-align: center">{{ scope.row.name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格" width="100" />
      <el-table-column prop="sellCount" label="销量" width="100" />
      <el-table-column prop="count" label="库存" width="100" />
      <el-table-column prop="back" label="退款数量" width="100" />
      <el-table-column prop="backPrice" label="退款金额" width="100" />
      <el-table-column prop="name" label="操作" width="100">
        <template #default="scope">
          <el-button
            @click="operate(scope.row)"
            :type="scope.row.state ? 'danger' : 'success'"
            >{{ scope.row.state ? "下架" : "上架" }}</el-button
          >
        </template>
      </el-table-column>
      <el-table-column prop="owner" label="管理员" width="100" />
      <el-table-column prop="time" label="更新时间" width="100" />
    </el-table>
  </div>
</template>
<script>
import Mock from '@/mock/Mock'
export default {
  data () {
    return {
      goodsData: [],
      // 分类数据
      categorys: [
        "全部",
        "男装",
        "女装"
      ],
      queryParams: {
        name: "",
        id: "",
        category: "",
        sellMode: "",
        expMode: "",
      }
    }
  },
  computed: {
    sellModeString: {
      get () {
        if (this.queryParams.sellMode == 2) {
          return '全部'
        }
        return this.queryParams.sellMode == 0 ? '否' : '是'
      },
      set (val) {
        this.queryParams.sellMode = val
      }
    },
    expModeString: {
      get () {
        if (this.queryParams.expMode == 2) {
          return '全部'
        }
        return this.queryParams.expMode == 0 ? '否' : '是'
      },
      set (val) {
        this.queryParams.expMode = val
      }

    }
  },
  // 组件挂载时获取数据
  mounted () {
    this.goodsData = Mock.getGoods(this.$route.params.type)
  },
  // 路由更新时刷新数据
  beforeRouteUpdate (to) {
    this.goodsData = Mock.getGoods(to.params.type)
  },
  methods: {
    // 获取数据的方法
    requestData () {
      this.$message({
        type: 'success',
        message: '筛选请求参数：' + JSON.stringify(this.queryParams)
      })
      this.goodsData = Mock.getGoods(this.$route.params.type)
    },
    // 进行上架下架操作
    operate (item) {
      item.state = !item.state
    },
    // 清空筛选项
    clear () {
      this.queryParams = {
        name: "",
        id: "",
        category: "",
        sellMode: 2,
        expMode: 2,
      }
      this.goodsData = Mock.getGoods(this.$route.params.type)
    },
    // 新增商品
    addGoods () {
      this.$router.push({ name: 'AddGoods', params: { type: this.$route.params.type } })
    }
  },



}
</script>
<style lang="">
</style>