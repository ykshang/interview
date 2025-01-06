// {
//   title: 'Group 1',   // 必要的
//   link: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//   collapsable: false, // 可选的, 默认值是 true,
//   sidebarDepth: 1,    // 可选的, 默认值是 1
//   children: [
//     '/'
//   ]
// },
// 侧边栏配置
module.exports = [{
  title: 'Hello Word！',
  link: '/guide/'
}, {
  title: '网页基础',
  link: '/browser/',
  children: [{
    title: '1. 重绘和重排（回流）',
    link: '/browser/1'
  }, {
    title: '2. 浏览器中输入URL到页面显示的全过程',
    link: '/browser/2'
  }]
}, {
  title: 'JS基础',
  link: '/JavaScript/',
  children: [{
    title: '1. 深拷贝和浅拷贝',
    link: '/JavaScript/1'
  }, {
    title: '2. 内存泄漏',
    link: '/JavaScript/2'
  }, {
    title: '3. 箭头函数和普通函数的区别',
    link: '/JavaScript/3'
  }, {
    title: '4. 跨域专题',
    link: '/JavaScript/4'
  }, {
    title: '5. typeof和instanceof的区别',
    link: '/JavaScript/5'
  }, {
    title: '6. 数据类型的隐式转换',
    link: '/JavaScript/6'
  }, {
    title: '7. 闭包',
    link: '/JavaScript/7'
  }, {
    title: '8. 作用域与作用域链',
    link: '/JavaScript/8'
  }, {
    title: '9. 事件循环（宏任务、微任务）',
    link: '/JavaScript/9'
  }, {
    title: '10. 原型链',
    link: '/JavaScript/10'
  }, {
    title: '11. 对象的集成',
    link: '/JavaScript/11'
  }, {
    title: '12. 模块化开发（AMD、ES6、CommonJS）',
    link: '/JavaScript/12'
  }, {
    title: '13. IEFI 立即执行函数',
    link: '/JavaScript/13'
  }, {
    title: '14. 事件冒泡、捕获、委托',
    link: '/JavaScript/14'
  }, {
    title: '15. 防抖和节流',
    link: '/JavaScript/15'
  }, {
    title: '16. 判断对象相等',
    link: '/JavaScript/16'
  }, {
    title: '17. 对象的遍历',
    link: '/JavaScript/17'
  }, {
    title: '18. JS异步编程',
    link: '/JavaScript/18'
  }, {
    title: '19. 对象的创建',
    link: '/JavaScript/19'
  }, {
    title: '20. this的指向',
    link: '/JavaScript/20'
  }, {
    title: '21. 严格模式',
    link: '/JavaScript/21'
  }, {
    title: '22. 判断对象的类型',
    link: '/JavaScript/22'
  }]
}, {
  title: 'Vue相关',
  link: '/vue/',
  children: [{
    title: '1. Vue的组件通信',
    link: '/vue/1'
  }, {
    title: '2. Vuex专题',
    link: '/vue/2'
  }, {
    title: '3. Vue2和Vue3的区别',
    link: '/vue/3'
  }]
}, {
  title: '网络相关',
  link: '/network/',
  children: [{
    title: '1. 正向代理和反向代理',
    link: '/network/1'
  }]
}]