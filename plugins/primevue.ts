import { defineNuxtPlugin } from '#app';
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Toast from 'primevue/toast';
import Card from 'primevue/card';
import Breadcrumb from 'primevue/breadcrumb';
import Image from 'primevue/image';
import Paginator from 'primevue/paginator';
import ProgressBar from 'primevue/progressbar';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Menu from 'primevue/menu';
import Listbox from 'primevue/listbox';
import DataView from 'primevue/dataview';
import Checkbox from 'primevue/checkbox';
import Carousel from 'primevue/carousel';
import Tag from 'primevue/tag';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';





import 'primevue/resources/themes/lara-light-blue/theme.css'; 
import 'primeicons/primeicons.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue);
  nuxtApp.vueApp.component('Dropdown', Dropdown);
  nuxtApp.vueApp.component('InputText', InputText);
  nuxtApp.vueApp.component('Textarea', Textarea);
  nuxtApp.vueApp.component('Button', Button);
  nuxtApp.vueApp.component('InputGroup', InputGroup);
  nuxtApp.vueApp.component('InputGroupAddon', InputGroupAddon);
  nuxtApp.vueApp.component('Toast', Toast);
  nuxtApp.vueApp.component('Card', Card);
  nuxtApp.vueApp.component('Breadcrumb', Breadcrumb);
  nuxtApp.vueApp.component('Image', Image);
  nuxtApp.vueApp.component('Paginator', Paginator);
  nuxtApp.vueApp.component('ProgressBar', ProgressBar);
  nuxtApp.vueApp.component('IconField', IconField);
  nuxtApp.vueApp.component('InputIcon', InputIcon); 
  nuxtApp.vueApp.component('Menu', Menu); 
  nuxtApp.vueApp.component('Listbox', Listbox); 
  nuxtApp.vueApp.component('DataView', DataView); 
  nuxtApp.vueApp.component('Checkbox', Checkbox); 
  nuxtApp.vueApp.component('Carousel', Carousel); 
  nuxtApp.vueApp.component('Tag', Tag);  
  nuxtApp.vueApp.component('TabView', TabView); 
  nuxtApp.vueApp.component('TabPanel', TabPanel); 


});
