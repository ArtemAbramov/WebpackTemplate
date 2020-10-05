import './main.scss';

import WOW from 'wow.js';
new WOW().init();

import Vue from 'vue';
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
import { Carousel, Slide } from 'vue-carousel';

const app = new Vue({
  el: '#app',
  components: { Carousel, Slide },
  data() {
    return {
      menuOpen: false,
      prev: '‹',
      next: '›',
      carouselSlides: 2,
      popupShow: false,
    };
  },
  created() {
    window.addEventListener('resize', this.updateSlider);
    this.$on('hook:beforeDestroy', () =>
      document.removeEventListener('resize', this.updateSlider)
    );
    this.updateSlider();
  },
  methods: {
    updateSlider() {
      if (window.innerWidth <= 768) {
        this.carouselSlides = 1;
      } else {
        this.carouselSlides = 2;
      }
    },
  },
});
