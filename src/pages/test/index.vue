<template>
  <div> C </div>
</template>

<script>
  export default {
    name: 'IndexPage',

    mounted() {
      // window.$vm.visible = false;
      setTimeout(() => {
        this.$store.commit('setVisible', true);
      }, 3000);
    },
  };
</script>
