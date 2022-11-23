<template>
  <div>
    <template v-if="isLoading">
      <p v-if="isLoading">loading...</p>
    </template>
    <template v-else>
      <ul>
        <li>
          {{ users }}
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
  export default {
    data: () => ({
      isLoading: false,
      users: [],
    }),
    async fetch() {},
    async mounted() {
      this.isLoading = true;
      const data = await this.$axios.get('/users');
      this.users = data.data.users;

      console.log(data.data);
      this.isLoading = false;
    },
  };
</script>
