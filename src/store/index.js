import { createStore } from "vuex";
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

const store = createStore({
  state() {
    return {
      userIsLoggedIn: localStorage.getItem("token") ? true : false,
      allUsers: [],
    };
  },
  mutations,
  getters,
  actions,
});

export default store;
