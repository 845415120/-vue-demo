<template >
  <!-- input -->
  <div>
    <!-- 第一行 -->
    <el-container>
      <div class="input-tip">商品名称:</div>
      <div class="input-field">
        <el-input v-model="queryParam.good"></el-input>
      </div>
      <div class="input-tip">收货人:</div>
      <div class="input-field">
        <el-input v-model="queryParam.consignee"></el-input>
      </div>
      <div class="input-tip">支付时间:</div>
      <div class="input-field">
        <el-date-picker
          v-model="queryParam.payTime"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束日期"
        />
      </div>
    </el-container>
    <!-- 第二行 -->
    <el-container>
      <div class="input-tip">用户名称:</div>
      <div class="input-field">
        <el-input v-model="queryParam.name"></el-input>
      </div>
      <div class="input-tip">手机号:</div>
      <div class="input-field">
        <el-input v-model="queryParam.phone"></el-input>
      </div>
      <div class="input-tip">发货日期:</div>
      <div class="input-field">
        <el-date-picker
          v-model="queryParam.sendTime"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束日期"
        />
      </div>
    </el-container>
  </div>
  <!-- 按钮 -->
  <div>
    <el-container>
      <el-button type="primary" @click="requestData">筛选</el-button>
      <el-button type="danger" @click="clear">清空筛选</el-button>
      <el-button type="primary" @click="1">导出</el-button>
      <el-button type="primary" @click="2">批量发货</el-button>
      <el-button type="primary" @click="3">下载批量发货</el-button>
    </el-container>
  </div>
  <!-- 列表 -->
  <div>
    <!-- tabs -->
    <el-tabs type="card" tab-position="top" @tab-click="handleClick">
      <el-tab-pane label="全部"></el-tab-pane>
      <el-tab-pane label="未支付"></el-tab-pane>
      <el-tab-pane label="已支付"></el-tab-pane>
      <el-tab-pane label="代发货"></el-tab-pane>
      <el-tab-pane label="已发货"></el-tab-pane>
      <el-tab-pane label="支付超时"></el-tab-pane>
    </el-tabs>
    <!-- table -->
    <el-table
      :data="orderList"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="50"> </el-table-column>
      <el-table-column label="商品" width="100" prop="name"> </el-table-column>
      <el-table-column label="总价/数量" width="100" prop="price">
      </el-table-column>
      <el-table-column label="买家信息" width="100" prop="buyer">
      </el-table-column>
      <el-table-column label="交易时间" width="200" prop="time">
      </el-table-column>
      <el-table-column label="分销信息" width="100">
        <template #default="scope">
          <el-tag size="medium" :type="scope.row.role ? '' : 'info'">
            {{ scope.row.role ? "经理" : "分销员" }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="100">
        <template #default="scope">
          <el-tag size="medium" :type="scope.row.role ? 'success' : 'danger'">
            {{ scope.row.role ? "已完成" : "未完成" }}
          </el-tag>
        </template>
      </el-table-column>
      <!-- 删除 -->
      <el-table-column label="Operations" width="200xp">
        <template #default="scope">
          <el-button
            size="small"
            type="danger"
            @click="handleEdit(scope.$index, scope.row)"
            >删除</el-button
          >
          <el-button
            size="small"
            type="primary"
            @click="handleDelete(scope.$index, scope.row)"
            >联系客户</el-button
          >
        </template>
      </el-table-column>
      <!-- 支付 -->
      <el-table-column label="支付方式" width="100">
        <template #default="scope">
          <el-tag size="medium">{{
            scope.row.payType ? "微信" : "支付宝"
          }}</el-tag>
        </template>
      </el-table-column>
      <!-- 来源 -->
      <el-table-column label="来源" width="200" prop="source">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import Mock from '@/mock/Mock'
export default {
  data () {
    return {
      // 订单列表数据
      orderList: [],
      // 查询订单参数
      queryParam: {
        good: "",
        consignee: "",//收货人
        phone: "",
        name: "",
        payTime: "",
        sendTime: ""

      },
      // 当前选中的订单对象
      multipleSelection: []
    }
  },
  mounted () {
    this.orderList = Mock.getOrder(this.$route.params.type)//带参数的动态路由匹配
  },
  // 路由更新时刷新数据
  beforeRouteUpdate (to) {
    this.orderList = Mock.getOrder(to.params.type)
  },
  methods: {
    // 模拟请求数据
    requestData () {
      this.$message({
        type: 'success',
        message: '筛选请求参数：' + JSON.stringify(this.queryParam) //转换为字符串
      })
      this.orderList = Mock.getOrder(this.$route.params.type)
    },
    // 切换tab刷新数据
    handleClick (tab) {
      this.$message({
        type: 'success',
        message: '切换tab刷新数据：' + tab.props.label
      })
      this.orderList = Mock.getOrder(this.$route.params.type)

    },
    // 清空筛选项
    clear () {
      this.queryParam = {
        good: "",
        consignee: "",//收货人
        phone: "",
        name: "",
        payTime: "",
        sendTime: ""
      }
      this.orderList = Mock.getOrder(this.$route.params.type)
    }
  }
}
</script>
<style lang="">
</style>