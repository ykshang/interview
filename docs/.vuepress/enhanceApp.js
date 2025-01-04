import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Codes from './componets/Codes.vue';
import CodeBold from './componets/CodeBold.vue';


export default ({ Vue }) => {
  Vue.use(Element);
  Vue.component('Codes', Codes)
  Vue.component('CodeBold', CodeBold)
};