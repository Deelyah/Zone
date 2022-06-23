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
        <button
          @click="dropdownIsOpen = true"
          class="block sm:hidden bg-gray-200 border border-gray-300 p-1 rounded"
        >
          <img src="@/assets/hamburger.png" alt="menu" />
        </button>
        <div class="hidden sm:block">
          <button>
            <router-link
              to="/home"
              class="font-semibold w-full text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-2 mr-2 mt-8 text-blue-700 border border-transparent hover:border-blue-700 rounded"
            >
              Home
            </router-link>
          </button>
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
      </div>
    </header>

    <div
      v-if="dropdownIsOpen"
      class="flex flex-col items-start absolute top-16 dropdown right-0 z-20 bg-gray-200 border border-gray-300"
    >
      <div class="py-2 w-full flex justify-end" @click="dropdownIsOpen = false">
        <svg
          :class="`fill-current h-6 w-6 text-blue-500 `"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </div>
      <button @click="dropdownIsOpen = false" class="flex items-center">
        <router-link
          to="/home"
          class="font-semibold w-full text-base px-16 py-2 text-blue-700 border border-transparent hover:border-blue-700"
        >
          Home
        </router-link>
      </button>

      <button @click="dropdownIsOpen = false" class="flex items-center">
        <router-link
          to="/myaccount"
          class="font-semibold w-full text-base px-10 py-2 text-blue-700 border border-transparent hover:border-blue-700"
        >
          My Account
        </router-link>
      </button>

      <button @click="dropdownIsOpen = false" class="flex items-center">
        <router-link
          to="/users"
          class="font-semibold text-base w-full px-16 py-2 text-blue-700 border border-transparent hover:border-blue-700"
        >
          Users
        </router-link>
      </button>

      <button
        @click="logOut"
        class="flex items-center font-semibold text-base px-14 py-2 text-blue-700 border border-transparent hover:border-blue-700"
      >
        Log out
      </button>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownIsOpen: false,
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
