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
  path: '/guide/index'
}, {
  title: '网页基础',
  path: '/browser/index',
  children: [{
    title: '1. 重绘和重排（回流）',
    path: '/browser/1'
  }, {
    title: '2. 浏览器中输入URL到页面显示的全过程',
    path: '/browser/2'
  }]
}, {
  title: 'JS基础',
  path: '/JavaScript/index',
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
  }, {
    title: '5. typeof和instanceof的区别',
    path: '/JavaScript/5'
  }, {
    title: '6. 数据类型的隐式转换',
    path: '/JavaScript/6'
  }, {
    title: '7. 闭包',
    path: '/JavaScript/7'
  }, {
    title: '8. 作用域与作用域链',
    path: '/JavaScript/8'
  }, {
    title: '9. 事件循环（宏任务、微任务）',
    path: '/JavaScript/9'
  }, {
    title: '10. 原型链',
    path: '/JavaScript/10'
  }, {
    title: '11. 对象的集成',
    path: '/JavaScript/11'
  }, {
    title: '12. 模块化开发（AMD、ES6、CommonJS）',
    path: '/JavaScript/12'
  }, {
    title: '13. 事件委托',
    path: '/JavaScript/13'
  }, {
    title: '14. 事件冒泡',
    path: '/JavaScript/14'
  }, {
    title: '15. 防抖和节流',
    path: '/JavaScript/15'
  }, {
    title: '16. 判断对象相等',
    path: '/JavaScript/16'
  }]
}, {
  title: 'Vue相关',
  path: '/vue/index',
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
  path: '/network/index',
  children: [{
    title: '1. 正向代理和反向代理',
    path: '/network/1'
  }]
}]