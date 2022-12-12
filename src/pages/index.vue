<template>
  <div>
    A
    <nuxt-link to="/indexa">csr 이동</nuxt-link>
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
      // window.$vm.visible = false;
      setTimeout(() => {
        this.$store.commit('setVisible', true);
      }, 3000);
    },
  };
</script>
