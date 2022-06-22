import axios from "axios";
import authHeader from "../services/auth-header";
const baseUrl = "https://reqres.in/api";

export default {
  async fetchAllUsers(context) {
    try {
      const response = await axios.get(`${baseUrl}/users?page=1`, {
        headers: authHeader(),
      });
      context.commit("setAllUsers", response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
    // } else {
    //   this.$router.push("/login");
    // }
  },

  async createProfile(context, payload) {
    try {
      const response = await axios.post(
        `${baseUrl}/users`,
        payload,
        authHeader()
      );
      console.log(response.data);
      context.commit("setUsersProfile", response.data);
    } catch (error) {
      console.log(error);
    }
  },

  async updateProfile(context, payload) {
    const id = context.state.profile.id;
    try {
      const response = await axios.put(
        `${baseUrl}/users/${id}`,
        payload,
        authHeader()
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },

  async deleteProfile(_, payload) {
    try {
      await axios.delete(`${baseUrl}/users/2`, {
        headers: authHeader(),
        body: payload,
      });
      // console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },

  async signUp(context, payload) {
    try {
      const response = await axios.post(`${baseUrl}/users/register`, payload);
      context.dispatch("fetchAllUsers");
      console.log("Signup", response);
    } catch (error) {
      console.log(error);
    }
  },

  async login({ commit }, payload) {
    try {
      const response = await axios.post(`${baseUrl}/login`, payload);
      localStorage.setItem("token", response.data.token);
      commit("toggleLoginState");
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },
};
