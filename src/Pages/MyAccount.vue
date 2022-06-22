<template>
  <div>
    <div
      class="sticky top-0 h-screen overflow-scroll pt-5 flex justify-center w-full"
    >
      <div class="flex flex-col items-center bg-white shadow-lg p-5 w-5/6">
        <div
          :class="`${
            isProfileDeleted ? 'block' : 'hidden'
          } bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative w-3/5 mb-5`"
          role="alert"
        >
          <strong class="font-semibold text-xl">Profile Deleted!</strong>
          <span
            class="absolute top-0 bottom-0 right-0 px-4 py-3"
            @click="isProfileDeleted = false"
          >
            <svg
              class="fill-current h-6 w-6 text-green-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </span>
        </div>
        <img src="../assets/largest-dp.png" alt="" />
        <div class="w-full mt-5">
          <ul class="w-full">
            <li>
              <button
                @click="location = !location"
                class="text-left py-3 border border-gray-400 w-full rounded mb-6 pl-3 hover:bg-blue-700 hover:text-white hover:border-white"
              >
                My location
              </button>
            </li>
            <li>
              <button
                @click="createProfile = !createProfile"
                :disabled="toggleDisable"
                :class="`text-left py-3 border border-gray-400 w-full rounded mb-6 pl-3 ${
                  toggleDisable ? 'hover:bg-gray-500' : 'hover:bg-blue-700'
                } hover:text-white hover:border-white`"
              >
                Create Profile
              </button>
            </li>
            <li>
              <button
                @click="editProfile = !editProfile"
                class="text-left py-3 border border-gray-400 w-full rounded mb-6 pl-3 hover:bg-blue-700 hover:text-white hover:border-white"
              >
                Update Profile
              </button>
            </li>
            <li>
              <button
                @click="deleteProfile"
                class="text-left py-3 border border-red-600 w-full rounded mb-6 pl-3 hover:bg-red-600 hover:text-white hover:border-white"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ViewLocation
      v-if="location"
      @closeForm="location = !location"
    ></ViewLocation>
    <CreateProfile
      v-if="createProfile"
      @closeForm="createProfile = !createProfile"
      @create="
        () => {
          createProfile = !createProfile;
          toggleDisable = !toggleDisable;
          isProfileDeleted = false;
        }
      "
    ></CreateProfile>

    <UpdateProfile
      v-if="editProfile"
      @closeForm="editProfile = !editProfile"
      @saveEdit="editProfile = !editProfile"
    ></UpdateProfile>
  </div>
</template>

<script>
import UpdateProfile from "../components/UpdateProfile.vue";
import CreateProfile from "../components/CreateProfile.vue";
import ViewLocation from "../components/ViewLocation.vue";
export default {
  data() {
    return {
      location: false,
      createProfile: false,
      editProfile: false,
      toggleDisable: false,
      isProfileDeleted: false,
    };
  },
  components: { UpdateProfile, CreateProfile, ViewLocation },
  methods: {
    deleteProfile() {
      if (this.toggleDisable) {
        this.$store.dispatch("deleteProfile");
        this.toggleDisable = !this.toggleDisable;
        this.isProfileDeleted = true;
        setTimeout(() => {
          this.isProfileDeleted = false;
        }, 3000);
      } else {
        return;
      }
    },
  },
  computed: {},
};
</script>

<style></style>
