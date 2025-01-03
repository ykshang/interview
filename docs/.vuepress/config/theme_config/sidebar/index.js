// {
//   title: 'Group 1',   // 必要的
//   path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//   collapsable: false, // 可选的, 默认值是 true,
//   sidebarDepth: 1,    // 可选的, 默认值是 1
//   children: [
//     '/'
//   ]
// },
// 侧边栏配置
module.exports = [{
  title: 'Hello Word！',
  path: '/guide/'
}, {
  title: 'JS基础',
  children: [{
    title: '1. 深拷贝和浅拷贝',
    path: '/JavaScript/1'
  }, {
    title: '2. 内存泄漏',
    path: '/JavaScript/2'
  }, {
    title: '3. 箭头函数和普通函数的区别',
    path: '/JavaScript/3'
  }, {
    title: '4. 跨域专题',
    path: '/JavaScript/4'
  }]
}, {
  title: 'Vue相关',
  children: [{
    title: '1. Vue的组件通信',
    path: '/vue/1'
  }, {
    title: '2. Vuex专题',
    path: '/vue/2'
  }, {
    title: '3. Vue2和Vue3的区别',
    path: '/vue/3'
  }]
}, {
  title: '网络相关',
  children: [{
    title: '1. 正向代理和反向代理',
    path: '/network/1'
  }]
}]