let JavaScript= require('./JavaScript');
let vue= require('./vue');
let network= require('./network');
let basic= require('./basic');
let Browser= require('./Browser');

let welcome = {
  text: '欢迎',
  link: '/guide/'
};

// 导航栏配置
module.exports = [
  welcome,
  JavaScript,
  vue,
  network,
  basic,
  Browser
];