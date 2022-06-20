<template>
  <div>
    <div class="flex justify-center">
      <div class="w-full px-10 py-10 sm:px-20 md:w-1/2 login">
        <p class="text-xs text-gray-500">
          {{ isSigningUp ? "Already" : "Not" }} a member?
          <router-link
            :to="isSigningUp ? '/login' : '/signUp'"
            @click="isSigningUp = !isSigningUp"
            class="font-semibold text-blue-700 cursor-pointer"
            >{{ isSigningUp ? "Login here" : "Sign up now" }}</router-link
          >
        </p>
        <div class="mt-20 login_form">
          <h1 class="text-4xl font-semibold text-black">Welcome to Zone</h1>
          <p class="hidden pr-32 mt-4 text-xs text-gray-400 lg:block">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
            pariatur vero minima fugiat molestiae esse laboriosam beatae quod
            dolor perferendis!
          </p>
          <form @submit.prevent="collectData" class="w-full mt-8 md:w-4/5">
            <div v-if="isSigningUp">
              <label
                for="username"
                class="text-xs font-semibold text-blue-700 md:text-sm"
                >Name*</label
              >
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Name"
                class="block w-full px-2 py-2 mt-2 border border-gray-300 rounded focus:border-blue-700 focus:outline-none"
              />
            </div>

            <div class="mt-4">
              <label
                for="email"
                class="text-xs font-semibold text-blue-700 md:text-sm"
                >Email*</label
              >
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
                class="block w-full px-2 py-2 mt-2 border border-gray-300 rounded focus:border-blue-700 focus:outline-none"
              />
            </div>

            <div class="mt-4">
              <label
                for="password"
                class="text-xs font-semibold text-blue-700 md:text-sm"
                >Password*</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="6+ characters"
                min="6"
                class="block w-full px-2 py-2 mt-2 border border-gray-300 rounded focus:border-blue-700 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              class="w-full px-2 py-2 m-auto mt-8 text-white bg-blue-700 rounded"
            >
              {{ action }}
            </button>
          </form>
        </div>
      </div>
      <div
        class="flex-col items-center justify-center hidden w-1/2 h-screen md:flex background"
      >
        <h1 class="font-bold text-white text-7xl">Buy Easily</h1>
        <p class="px-24 mt-10 text-xs text-center text-gray-400">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          corporis nostrum quia libero quibusdam beatae quis consequatur illum
          non animi?"
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSigningUp: true,
    };
  },

  methods: {
    toggleForm() {
      this.isSigningUp = !this.isSigningUp;
    },
    collectData() {},
  },
  computed: {
    action() {
      if (this.isSigningUp == true) {
        return "Create Account";
      } else {
        return "Login";
      }
    },
  },
};
</script>

<style>
.background {
  background-image: url("../assets/blue-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
