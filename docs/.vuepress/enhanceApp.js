import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Codes from './componets/Codes.vue';


export default ({ Vue }) => {
  Vue.use(Element);
  Vue.component('Codes', Codes)
};