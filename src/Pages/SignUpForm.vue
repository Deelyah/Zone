<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-white shadow-lg p-5 w-3/6 mt-8 md:w-2/5">
      <form @submit.prevent="collectData" class="w-full">
        <div>
          <label
            for="firstname"
            class="text-xs font-semibold text-blue-700 md:text-sm"
            >Firstname*</label
          >
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="firstname"
            class="block w-full px-2 py-2 mt-2 border border-gray-300 rounded focus:border-blue-700 focus:outline-none"
            required
          />
        </div>
        <div class="mt-4">
          <label
            for="lastname"
            class="text-xs font-semibold text-blue-700 md:text-sm"
            >Lastname*</label
          >
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="lastname"
            class="block w-full px-2 py-2 mt-2 border border-gray-300 rounded focus:border-blue-700 focus:outline-none"
            required
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
            required
          />
        </div>

        <div class="mt-4">
          <label
            for="password"
            class="text-xs font-semibold text-blue-700 md:text-sm"
            >Password*</label
          >
          <p v-if="pswdError" class="text-xs text-red-500">
            Password must contain special characters and must be more than 8
          </p>
          <div
            class="flex border-gray-300 rounded focus:border-blue-700 border"
          >
            <input
              :type="`${passwordIsVisible ? 'text' : 'password'}`"
              name="password"
              id="password"
              placeholder="8+ characters"
              min="8"
              v-model="passwordValue"
              class="block w-full px-2 py-1 mt-2 focus:outline-none"
              :copy="false"
              :paste="false"
              required
            />
            <div class="flex items-end pb-2 pr-4">
              <button
                type="button"
                @click="passwordIsVisible = !passwordIsVisible"
                :class="`${passwordValue ? 'block' : 'hidden'}`"
              >
                <img
                  src="../assets/eye.png"
                  alt="View Password"
                  v-if="passwordIsVisible"
                />
                <img
                  src="../assets/eyelashes.png"
                  alt="Close Password"
                  v-else
                />
              </button>
            </div>
          </div>
        </div>

        <button
          @click="toggleForm"
          type="submit"
          class="w-full px-2 py-2 m-auto text-white bg-blue-700 rounded mt-8"
        >
          Create Account
        </button>
        <p class="text-xs text-gray-700 mt-4">
          Already have an account?
          <router-link to="login" class="text-blue-700 text-xs">
            Login
          </router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSigningUp: this.$route.path.includes("signin") ? true : false,
      passwordIsVisible: false,
      passwordValue: null,
      pswdError: false,
    };
  },

  methods: {
    toggleForm() {
      this.isSigningUp = !this.isSigningUp;
      const reg = /^[A-Za-z0-9 ]+$/.test(this.passwordValue);
      if (reg || this.passwordValue.length < 8) {
        this.pswdError = true;
      }
      setTimeout(() => {
        this.pswdError = false;
      }, 5000);
    },
    collectData() {},
  },
  computed: {},
};
</script>
<style></style>
