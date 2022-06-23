<template>
  <div>
    <div class="flex justify-center mt-5">
      <Alert
        :displayAlert="displayAlert"
        :alertColor="alertColor"
        :alertMessage="alertMessage"
        @closeAlert="displayAlert = false"
      ></Alert>
    </div>
    <div class="flex items-center justify-center h-4/5">
      <div class="bg-white shadow-lg p-5 w-4/5 sm:w-3/6">
        <form @submit.prevent="login" class="w-full">
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
              v-model.trim="email"
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
            <div
              class="flex border-gray-300 rounded focus:border-blue-700 border"
            >
              <input
                :type="`${passwordIsVisible ? 'text' : 'password'}`"
                name="password"
                id="password"
                placeholder="8+ characters"
                min="8"
                v-model.trim="passwordValue"
                class="block w-full px-2 py-2 mt-2 focus:outline-none"
                v-on:copy="false"
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
            type="submit"
            class="w-full px-2 py-2 m-auto mt-8 text-white bg-blue-700 rounded"
          >
            <span
              v-if="loading"
              class="w-full flex h-full justify-center items-center"
            >
              <svg
                role="status"
                class="w-6 h-6 mr-2 text-white-gray-200 animate-spin dark:text-gray-600 fill-blue-700"
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

            <span v-else> Sign in </span>
          </button>
          <p class="text-xs text-gray-700 mt-4">
            Don't have an account?
            <router-link to="signup" class="text-blue-700 text-xs">
              Sign up
            </router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Alert from "../components/Alert.vue";
export default {
  data() {
    return {
      displayAlert: false,
      alertColor: "red",
      alertMessage: "An action just took place",
      email: "",
      passwordValue: "",
      emailError: false,
      pswdError: false,
      passwordIsVisible: false,
      loading: false,
    };
  },
  methods: {
    login() {
      this.loading = true;
      this.$store
        .dispatch("login", { email: this.email, password: this.passwordValue })
        .then(
          () => {
            if (localStorage.getItem("token")) {
              this.displayAlert = false;
            } else {
              this.displayAlert = true;
              this.alertMessage = "Network error";
              this.alertColor = "red";
              setTimeout(() => {
                this.displayAlert = false;
              }, 5000);
            }
            this.loading = false;
            this.$router.push("/myaccount");
          },
          (error) => {
            this.loading = false;
            alert(error);
          }
        );
    },
  },
  computed: {},
  components: { Alert },
};
</script>

<style></style>
