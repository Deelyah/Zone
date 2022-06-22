<template>
  <div>
    <div
      class="sticky top-0 h-screen overflow-scroll pt-5 flex justify-center w-full"
    >
      <div class="flex flex-col items-center bg-white shadow-lg p-5 w-5/6">
        <img src="../assets/largest-dp.png" alt="" />
        <div class="w-full mt-5">
          <ul class="w-full">
            <li>
              <button
                class="text-left py-3 border border-gray-400 w-full rounded mb-6 pl-3"
              >
                My location
              </button>
            </li>
            <li>
              <button
                @click="createProfile = !createProfile"
                class="text-left py-3 border border-gray-400 w-full rounded mb-6 pl-3"
              >
                Create Profile
              </button>
            </li>
            <li>
              <button
                @click="editProfile = !editProfile"
                class="text-left py-3 border border-gray-400 w-full rounded mb-6 pl-3"
              >
                Update Profile
              </button>
            </li>
            <li>
              <button
                @click="deleteProfile"
                class="text-left py-3 border border-gray-400 w-full rounded mb-6 pl-3"
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <CreateProfile
      v-if="createProfile"
      @closeForm="createProfile = !createProfile"
      @create="createProfile = !createProfile"
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
export default {
  data() {
    return {
      createProfile: false,
      editProfile: false,
    };
  },
  components: { UpdateProfile, CreateProfile },
  methods: {
    deleteProfile() {
      this.$store.dispatch("deleteProfile");
    },
  },
};
</script>

<style></style>
