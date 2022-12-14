<template>
  <div>
    B
    <nuxt-link to="/test">이동</nuxt-link>
    <div v-html="wcmsInnerHtml"> </div>
  </div>
</template>

<script>
  import parse from '@/utils/test/wcms';
  export default {
    data: () => ({
      isLoading: false,
      users: [],
      wcmsInnerHtml: '',
    }),
    fetch() {
      this.wcmsInnerHtml = parse(
        '<a href="ddd">test</a><a href="ddd2">tes3t</a><a href="ddd44">test<span>22</span></a>',
        process.server,
        this.test,
      );
    },
    mounted() {
      console.log(parse('<a href="ddd">test</a><a href="ddd2">tes3t</a><a href="ddd44">test</a>'));
      // window.$vm.visible = true;
      setTimeout(() => {
        this.$store.commit('setVisible', true);
      }, 3000);
    },

    methods: {
      test(i) {
        i.setAttribute('data-sss', 'ddd');
      },
    },
  };
</script>
