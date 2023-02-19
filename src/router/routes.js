// import router from '.'
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: '首頁',
        component: () => import('src/pages/front/IndexPage.vue'),
        meta: {
          title: '首頁',
          login: false,
          admin: false
        }
      },
      {
        path: 'register',
        name: '註冊',
        component: () => import('src/pages/front/RegisterIn.vue'),
        meta: {
          title: '註冊頁',
          login: false,
          admin: false
        }
      },
      {
        path: 'login',
        name: '登入',
        component: () => import('src/pages/front/LoginPageView.vue'),
        meta: {
          title: '登入頁',
          login: false,
          admin: false
        }
      },
      {
        path: 'teamup',
        name: '組隊揪夥',
        component: () => import('src/pages/front/TeamUp.vue'),
        meta: {
          title: '組隊揪夥',
          login: false,
          admin: false
        }
      },
      {
        path: 'timefill',
        name: '時間填空',
        component: () => import('src/pages/front/TimeFill.vue'),
        meta: {
          title: '時間填空',
          login: false,
          admin: false
        }
      },
      {
        path: 'aboutme',
        name: '關於我們',
        component: () => import('src/pages/front/AboutMe.vue'),
        meta: {
          title: '關於我們',
          login: false,
          admin: false
        }
      },
      {
        path: 'products/:id',
        name: 'products',
        component: () => import('src/pages/front/ProductPageView.vue'),
        meta: {
          title: '活動網站 | 活動',
          login: false,
          admin: false
        }
      },
      {
        path: 'cart',
        name: '購物車',
        component: () => import('src/pages/front/CartViewPage.vue'),
        meta: {
          title: '活動網站 | 購物車',
          login: false,
          admin: false
        }
      },
      {
        path: 'orders',
        name: '訂單',
        component: () => import('src/pages/front/OrdersView.vue'),
        meta: {
          title: '活動網站 | 訂單',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/member',
    component: () => import('layouts/MemLayout.vue'),
    // meta: {
    //   title: '會員中心'
    // },
    children: [
      {
        path: '',
        name: '會員中心',
        component: () => import('src/pages/back/MemberPage.vue'),
        meta: {
          title: '會員中心',
          login: true,
          admin: false
        }
      },
      {
        path: 'addgang',
        name: '揪團發佈',
        component: () => import('../pages/back/AddGang.vue'),
        meta: {
          title: '揪團發佈',
          login: true,
          admin: false
        }
      },
      {
        path: 'addtime',
        name: '填空發佈',
        component: () => import('../pages/back/AddTime.vue'),
        meta: {
          title: '填空發佈',
          login: true,
          admin: false
        }
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    meta: {
      title: '網站管理'
    },
    children: [
      {
        path: '',
        name: '會員管理',
        component: () => import('src/pages/back/AdminPage.vue'),
        meta: {
          title: '會員管理',
          login: true,
          admin: true
        }
      },
      {
        path: '/products',
        name: '活動上架',
        component: () => import('../pages/back/ActivityUp.vue'),
        meta: {
          title: '活動管理',
          login: true,
          admin: true
        }
      },
      {
        path: '/order',
        name: 'adminorders',
        component: () => import('../pages/back/OrderManage.vue'),
        meta: {
          title: '訂單管理',
          login: true,
          admin: true
        }
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
