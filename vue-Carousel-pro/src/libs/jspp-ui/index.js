import Carousel from './Carousel/index.vue';
import CarItem from './Carousel/item.vue';
let JsppUI = {};

JsppUI.install = function(Vue){
    Vue.component(Carousel.name,Carousel);
    Vue.component(CarItem.name,CarItem);
}

export default JsppUI;