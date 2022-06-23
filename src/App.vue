<template>
  <div class="relative overflow-hidden h-screen">
    <header class="flex justify-between p-4 items-center w-full shadow-lg">
      <h1
        class="text-blue-700 text-3xl font-semibold cursor-pointer"
        @click="
          () => {
            $router.push('/');
          }
        "
      >
        Zone
      </h1>
      <div v-if="!token">
        <button>
          <router-link
            to="/signup"
            class="font-semibold w-full px-2 py-2 mr-2 mt-8 text-blue-700 border border-transparent hover:border-blue-700 rounded"
          >
            SignUp</router-link
          >
        </button>

        <button>
          <router-link
            to="/login"
            class="font-semibold w-full px-4 py-2 m-auto mt-8 text-blue-700 border border-transparent hover:border-blue-700 rounded"
          >
            Login
          </router-link>
        </button>
      </div>
      <div v-else>
        <button>
          <router-link
            to="/myaccount"
            class="font-semibold w-full text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 mr-2 mt-8 text-blue-700 border border-transparent hover:border-blue-700 rounded"
          >
            My Account
          </router-link>
        </button>
        <button>
          <router-link
            to="/users"
            class="font-semibold text-sm sm:text-base w-full px-2 sm:px-4 py-1 sm:py-2 m-auto mr-2 mt-8 text-blue-700 border border-transparent hover:border-blue-700 rounded"
          >
            Users
          </router-link>
        </button>
        <button
          @click="logOut"
          class="font-semibold text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 m-auto text-blue-700 border border-transparent hover:border-blue-700 rounded"
        >
          Log out
        </button>
      </div>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: localStorage.getItem("token") ? true : false,
    };
  },
  methods: {
    logOut() {
      localStorage.removeItem("token");
      this.token;
      this.$store.commit("toggleLoginState");
      this.$router.push("/");
      // console.log(this.$store.getters.getUserState);
    },
  },

  watch: {
    $route() {
      if (localStorage.getItem("token")) {
        this.token = true;
      } else {
        this.token = false;
      }
      // console.log(this.token);
    },
  },

  created() {
    this.token = localStorage.getItem("token") ? true : false;
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Arvo:wght@100;200;300;400;500;600;700&display=swap);

body,
h1,
p {
  font-family: "Arvo", serif;
}
html {
  margin: 0;
  padding: 0;
}

a.router-link-active {
  border: 1px solid #1d4e8d;
}
</style>
