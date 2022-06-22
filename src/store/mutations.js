export default {
  toggleLoginState(state) {
    state.userIsLoggedIn = !state.userIsLoggedIn;
  },

  setAllUsers(state, allUsers) {
    state.allUsers = allUsers;
  },

  setUsersProfile(state, payload) {
    state.profile = payload;
  },

  setUserLocation(state, payload) {
    state.location = payload;
    console.log(payload);
  },
};
