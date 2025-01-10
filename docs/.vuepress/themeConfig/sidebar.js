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
  title: '首页',
  path: '/'
}, {
  title: '网页基础',
  path: '/browser/',
  children: [{
    title: '1. 重绘和重排（回流）',
    path: '/browser/1'
  }, {
    title: '2. 浏览器中输入URL到页面显示的全过程',
    path: '/browser/2'
  }, {
    title: '3. 前端路由',
    path: '/browser/3'
  }]
}, {
  title: 'JS基础',
  path: '/JavaScript/',
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
    title: '11. 对象的继承',
    path: '/JavaScript/11'
  }, {
    title: '12. 模块化开发（AMD、ES6、CommonJS）',
    path: '/JavaScript/12'
  }, {
    title: '13. IEFI 立即执行函数',
    path: '/JavaScript/13'
  }, {
    title: '14. 事件绑定、冒泡、捕获、委托',
    path: '/JavaScript/14'
  }, {
    title: '15. 防抖和节流',
    path: '/JavaScript/15'
  }, {
    title: '16. 判断对象相等',
    path: '/JavaScript/16'
  }, {
    title: '17. 对象的遍历',
    path: '/JavaScript/17'
  }, {
    title: '18. JS异步编程',
    path: '/JavaScript/18'
  }, {
    title: '19. 对象的创建',
    path: '/JavaScript/19'
  }, {
    title: '20. this的指向',
    path: '/JavaScript/20'
  }, {
    title: '21. 严格模式',
    path: '/JavaScript/21'
  }, {
    title: '22. 判断对象的类型',
    path: '/JavaScript/22'
  }, {
    title: '23. JS自定义事件',
    path: '/JavaScript/23'
  }, {
    title: '24. 定时器setTimeout()、setInterval()、requestAnimationFrame()',
    path: '/JavaScript/24'
  }, {
    title: '25. JS 脚本的阻塞特性',
    path: '/JavaScript/25'
  }, {
    title: '26. 解构赋值',
    path: '/JavaScript/26'
  }, {
    title: '27. Call、Apply、Bind 的区别',
    path: '/JavaScript/27'
  }, {
    title: '28. 值域 this 指向',
    path: '/JavaScript/28'
  }, {
    title: '29. 数组去重',
    path: '/JavaScript/29'
  }, {
    title: '30. Generator 函数',
    path: '/JavaScript/30'
  }, {
    title: '31. WebSocket 专题',
    path: '/JavaScript/31'
  }, {
    title: '32. 什么是并发和并行？JavaScript 中如何实现并发操作？',
    path: '/JavaScript/32'
  }]
}, {
  title: 'Vue相关',
  path: '/vue/',
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
  title: '算法',
  path: '/Algorithm/',
  children: [{
    title: '1. 发布/订阅模式',
    path: '/Algorithm/1'
  }, {
    title: '2. 快速排序算法',
    path: '/Algorithm/2'
  }, {
    title: '3. 二分查找算法',
    path: '/Algorithm/3'
  }, {
    title: '4. 先序遍历、中序遍历、后序遍历',
    path: '/Algorithm/4'
  }, {
    title: '5. 观察者模式',
    path: '/Algorithm/5'
  }]
}, {
  title: '网络相关',
  path: '/network/',
  children: [{
    title: '1. 正向代理和反向代理',
    path: '/network/1'
  }]
}]