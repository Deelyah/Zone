import axios from "axios";
const baseUrl = "https://reqres.in/api";

export default {
  async fetchAllUsers(context) {
    try {
      const response = await axios.get(`${baseUrl}/users`);
      context.commit("setAllUsers", response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  },

  async signUp(context, payload) {
    console.log(payload);
    try {
      const response = await axios.post(`${baseUrl}/users/register`, payload);
      context.dispatch("fetchAllUsers");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },

  // async login(context) {
  //   try {
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};
