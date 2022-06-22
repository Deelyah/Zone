export default {
  getUserState(state) {
    return state.userIsLoggedIn;
  },

  getAllUsers(state) {
    return state.allUsers;
  },
};
