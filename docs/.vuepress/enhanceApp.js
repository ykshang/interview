import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/main.css';// 引入自定义样式
import LinkIcon from './componets/LinkIcon.vue'
export default ({ Vue }) => {
  Vue.use(Element);
  Vue.component('LinkIcon', LinkIcon)
};