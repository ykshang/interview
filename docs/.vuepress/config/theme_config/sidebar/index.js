const JavaScript= require('./JavaScript');
const vue = require('./vue');
const network = require('./network');
const basic = require('./basic');

let welcome = {
  title: 'Hello Word！',
  path: '/guide/'
};
// 侧边栏配置
module.exports = [
  welcome,
  JavaScript,
  vue,
  network,
  basic
]
  // {
    //   title: 'Group 1',   // 必要的
    //   path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //   collapsable: false, // 可选的, 默认值是 true,
    //   sidebarDepth: 1,    // 可选的, 默认值是 1
    //   children: [
    //     '/'
    //   ]
    // },