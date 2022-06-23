<template>
  <div>
    <span
      v-if="loading"
      class="w-full flex justify-center items-center h-screen"
    >
      <svg
        role="status"
        class="w-20 h-20 mr-2 text-white-gray-200 animate-spin dark:text-gray-600 fill-blue-700"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="white"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="blue"
        />
      </svg>
      Loading
    </span>
    <div v-else class="sticky top-0 h-screen overflow-scroll py-5">
      <div class="flex items-center justify-center">
        <div class="bg-white shadow-lg p-5 w-5/6">
          <ul class="flex flex-wrap justify-center">
            <li
              v-for="(user, index) in allUsers"
              :key="index"
              class="basis-1/4 mb-16 px-5"
            >
              <div class="flex flex-col items-center justify-center">
                <img :src="user.avatar" />
                <p>Name: {{ user.first_name }} {{ user.last_name }}</p>
                <p>Email: {{ user.email }}</p>
              </div>
            </li>
          </ul>

          <div id="pagination" class="flex justify-between mb-10">
            <button
              @click="previous"
              class="bg-gray-100 border border-gray-300 px-3 py-1"
            >
              Prev
            </button>
            <div>
              <button v-if="page1" class="rounded-full">1</button>
              <button v-else>2</button>
            </div>
            <button
              @click="next"
              class="bg-gray-100 border border-gray-300 px-3 py-1"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allUsers: [],
      loading: false,
      page1: true,
    };
  },

  methods: {
    previous() {
      this.page1 = true;
      this.loading = true;
      this.$store.dispatch("fetchAllUsers", 1).then(() => {
        this.allUsers = this.$store.getters.getAllUsers;
        this.loading = false;
      });
    },

    next() {
      this.page1 = false;
      this.loading = true;
      this.$store.dispatch("fetchAllUsers", 2).then(() => {
        this.allUsers = this.$store.getters.getAllUsers;
        // console.log(this.allUsers);

        this.loading = false;
      });
    },
  },

  async created() {
    this.loading = true;
    await this.$store.dispatch("fetchAllUsers", 1).then(() => {
      this.allUsers = this.$store.getters.getAllUsers;
      this.loading = false;
    });
  },
};
</script>
<!-- 
<style scoped>
.users {
  
}</style> -->
