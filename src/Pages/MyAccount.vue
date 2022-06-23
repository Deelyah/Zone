<template>
  <div>
    <div
      class="sticky top-0 h-screen overflow-scroll pt-5 flex justify-center w-full"
    >
      <div
        class="flex flex-col items-center bg-white shadow-lg p-5 w-5/6 sm:w-4/6 md:w-3/6"
      >
        <Alert
          :displayAlert="displayAlert"
          :alertColor="alertColor"
          :alertMessage="alertMessage"
          @closeAlert="displayAlert = false"
        ></Alert>

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
                @click="
                  createProfileFormIsVisible = !createProfileFormIsVisible
                "
                :disabled="createBtnIsDisabled"
                :class="`text-left py-3 border border-gray-400 w-full rounded mb-6 pl-3 ${
                  createBtnIsDisabled
                    ? 'hover:bg-gray-500'
                    : 'hover:bg-blue-700'
                } hover:text-white hover:border-white`"
              >
                Create Profile
              </button>
            </li>
            <li>
              <button
                @click="profileUpdate"
                class="text-left py-3 border border-gray-400 w-full rounded mb-6 pl-3 hover:bg-blue-700 hover:text-white hover:border-white"
              >
                Update Profile
              </button>
            </li>
            <li>
              <button
                @click="deleteProfile"
                class="text-left py-3 border border-gray-400 w-full rounded mb-6 pl-3 hover:bg-red-600 hover:text-white hover:border-white"
              >
                <span
                  v-if="loading"
                  class="w-full flex h-full justify-center items-center"
                >
                  <svg
                    role="status"
                    class="w-6 h-6 mr-2 text-white-gray-200 animate-spin dark:text-gray-600"
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
                      fill="red"
                    />
                  </svg>
                  Deleting profile
                </span>

                <span v-else> Delete Profile</span>
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
      v-if="createProfileFormIsVisible"
      @closeForm="createProfileFormIsVisible = !createProfileFormIsVisible"
      @create="
        () => {
          createProfileFormIsVisible = !createProfileFormIsVisible;
          createBtnIsDisabled = !createBtnIsDisabled;
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
import Alert from "../components/Alert.vue";
export default {
  data() {
    return {
      alertColor: "green",
      displayAlert: false,
      alertMessage: "",
      location: false,
      loading: false,
      createProfileFormIsVisible: false,
      editProfile: false,
      createBtnIsDisabled: false,
      isProfileDeleted: false,
      cannotUpdateProfile: false,
    };
  },
  components: { UpdateProfile, CreateProfile, ViewLocation, Alert },
  methods: {
    profileUpdate() {
      if (this.createBtnIsDisabled) {
        this.editProfile = !this.editProfile;
      } else {
        this.displayAlert = true;
        this.alertMessage = "Create Profile first";
        this.alertColor = "yellow";
        setTimeout(() => {
          this.displayAlert = false;
        }, 3000);
      }
    },

    deleteProfile() {
      if (this.createBtnIsDisabled) {
        this.loading = true;
        this.$store.dispatch("deleteProfile").then(() => {
          this.loading = false;
          this.alertMessage = "Profile Deleted!";
          this.alertColor = "green";
          this.displayAlert = true;
          this.createBtnIsDisabled = false;
          this.isProfileDeleted = true;
          setTimeout(() => {
            this.displayAlert = false;
          }, 3000);
        });
      } else {
        this.displayAlert = true;
        this.alertMessage = "Create Profile first";
        this.alertColor = "yellow";
        setTimeout(() => {
          this.displayAlert = false;
        }, 3000);
        return;
      }
    },
  },
  computed: {},
};
</script>

<style></style>
