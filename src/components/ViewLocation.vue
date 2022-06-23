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
            Here's your Location
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
        <div class="p-6 space-y-6">
          <div class="mt-4">
            <button
              type="button"
              name="name"
              id="name"
              class="block w-full px-2 py-2 mt-2 border border-gray-300 rounded focus:border-blue-700 focus:outline-none"
            >
              {{ location.city }}
            </button>
          </div>

          <div class="mt-4">
            <button
              type="button"
              name="name"
              id="name"
              class="block w-full px-2 py-2 mt-2 border border-gray-300 rounded focus:border-blue-700 focus:outline-none"
            >
              {{ location.state }}
            </button>
          </div>

          <div class="mt-4">
            <button
              type="button"
              name="name"
              id="name"
              class="block w-full px-2 py-2 mt-2 border border-gray-300 rounded focus:border-blue-700 focus:outline-none"
            >
              {{ location.country }}
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
      name: "",
      job: "",
      loading: false,
    };
  },

  methods: {
    updateProfile() {
      this.loading = true;
      this.$store
        .dispatch("updateProfile", { name: this.name, job: this.job })
        .then(() => {
          this.loading = false;
          this.$emit("saveEdit");
        });
    },
  },

  computed: {
    location() {
      // console.log(this.$store.getters.getUserLocation);
      return this.$store.getters.getUserLocation;
    },
  },
};
</script>
