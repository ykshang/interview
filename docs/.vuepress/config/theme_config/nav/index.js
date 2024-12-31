let basic= require('./basic');
let vue= require('./vue');

let welcome = {
  text: '欢迎',
  link: '/guide/'
};

// 导航栏配置
module.exports = [
  welcome,
  basic,
  vue
];