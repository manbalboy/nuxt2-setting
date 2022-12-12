<template>
  <div>
    B
    <nuxt-link to="/test">이동</nuxt-link>
  </div>
</template>

<script>
  export default {
    data: () => ({
      isLoading: false,
      users: [],
    }),
    async fetch() {},
    mounted() {
      // window.$vm.visible = true;
      setTimeout(() => {
        this.$store.commit('setVisible', true);
      }, 3000);
    },
  };
</script>
