import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/components/login/Login.vue'
import Home from '@/components/home/Home.vue'
import Order from '@/components/order/Order.vue'
import Goods from '@/components/goods/Goods.vue'
import AddGoods from '@/components/goods/AddGoods.vue'
import GoodCategory from '@/components/goods/GoodCategory.vue'
import ManagerList from '@/components/manager/ManagerList.vue'
import ManagerOrder from '@/components/manager/ManagerOrder.vue'
import ManagerReqList from '@/components/manager/ManagerReqList.vue'
import DataCom from '../components/financial/DataCom.vue'

import Store from '@/store/index'



const routes = [
  {
    path: '/login',
    component: Login,
    name: "login"
  },
  {
    path: '/home',
    component: Home,
    name: "home",
    children: [
      {
        path: 'order/:type', // 0是普通订单 1时表晒当你孤单
        component: Order,
        name: "Order"
      },
      {
        path: 'goods/:type',
        component: Goods,
        name: 'Goods'

      },
      {
        path: 'addgoods/:type',
        component: AddGoods,
        name: 'AddGoods'

      },
      {
        path: 'category',
        component: GoodCategory,
        name: 'GoodCategory'
      },
      {
        path: 'ownerlist',
        component: ManagerList,
        name: 'ManagerList'

      },
      {
        path: 'ownerreq',
        component: ManagerReqList,
        name: 'ManagerReqList'

      },
      {
        path: 'ownerorder',
        component: ManagerOrder,
        name: 'ManagerOrder'
      },
      {
        path: 'data',
        component: DataCom,
        name: 'DataCom'
      }
    ],

    // 重定向
    redirect: '/home/order/0'

  },

]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((from) => {
  let isLogin = Store.getters.isLogin
  if (isLogin || from.name == "login") {
    return true
  } else {
    return { name: "login" }
  }
})

export default router
