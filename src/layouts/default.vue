<template>
  <div>
    <button @click="historyBack">뒤로</button>
    <nuxt-link to="/test">C이동</nuxt-link>
    <nuxt-link to="/indexa">B이동</nuxt-link>
    <nuxt-link to="/">A이동</nuxt-link>
    {{ isVisible }}
    <div>
      <Nuxt v-show="isVisible" :key="$route.fullPath" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },

    computed: {
      isVisible() {
        return this.$store.state.visible;
      },
    },

    watch: {
      // isVisible(value) {
      //   console.log(value, '<<<<<<<<<<<<');
      //   this.visible = value;
      // },
    },
    created() {
      this.visible = false;
    },
    mounted() {
      setTimeout(() => {}, 3000);
    },

    methods: {
      historyBack() {
        window.history.back();
      },
    },
  };
</script>

<style></style>
