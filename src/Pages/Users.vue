<template>
  <div class="sticky top-0 h-screen overflow-scroll pt-5">
    <div class="flex items-center justify-center">
      <div class="bg-white shadow-lg p-5 w-5/6">
        <ul class="flex flex-wrap justify-between">
          <li
            v-for="(user, index) in allUsers"
            :key="index"
            class="basis-1/4 mb-16"
          >
            <div class="flex flex-col items-center justify-center">
              <img :src="user.avatar" />
              <p>Name: {{ user.first_name }} {{ user.last_name }}</p>
              <p>Email: {{ user.email }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allUsers: [],
    };
  },
  async created() {
    await this.$store.dispatch("fetchAllUsers");
    this.allUsers = this.$store.getters.getAllUsers;
  },
};
</script>
<!-- 
<style scoped>
.users {
  
}</style> -->
