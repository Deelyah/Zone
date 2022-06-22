<template>
  <div
    class="flex items-center justify-center h-screen bg-gray-900 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
  >
    <div id="defaultModal" class="w-full flex items-center justify-center">
      <div
        class="relative bg-white rounded-lg shadow dark:bg-gray-700 w-4/5 sm:w-3/6"
      >
        <div
          class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600"
        >
          <h3 class="text-xl font-semibold text-blue-900 dark:text-white">
            Edit Profile
          </h3>
          <button
            @click="$emit('closeForm')"
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-toggle="defaultModal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <form @submit.prevent="updateProfile">
          <div class="p-6 space-y-6">
            <div class="mt-4">
              <label
                for="name"
                class="text-xs font-semibold text-blue-700 md:text-sm"
                >Name*</label
              >
              <input
                type="text"
                name="name"
                id="name"
                placeholder="fullname"
                v-model.trim="name"
                class="block w-full px-2 py-2 mt-2 border border-gray-300 rounded focus:border-blue-700 focus:outline-none"
                required
              />
            </div>

            <div class="mt-4">
              <label
                for="job"
                class="text-xs font-semibold text-blue-700 md:text-sm"
                >Job*</label
              >
              <input
                type="text"
                name="job"
                id="job"
                placeholder="Job"
                v-model.trim="job"
                class="block w-full px-2 py-2 mt-2 border border-gray-300 rounded focus:border-blue-700 focus:outline-none"
                required
              />
            </div>
          </div>
          <div
            class="flex justify-center w-full p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600"
          >
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

              <span v-else> Save </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      job: "",
      loading: false,
    };
  },

  methods: {
    updateProfile() {
      this.loading = true;
      this.$store.dispatch("createProfile").then(() => {
        this.loading = false;
        this.$emit("create");
      });
    },
  },
};
</script>
