// import router from '.'

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/front/IndexPage.vue'), meta: { title: '首頁' } },
      { path: 'register', component: () => import('src/pages/front/RegisterIn.vue'), meta: { title: '註冊頁' } }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

// routes.afterEach((to, from) => {
//   document.title = to.meta.title
// })

export default routes
