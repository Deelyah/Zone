import axios from "axios";
import authHeader from "../services/auth-header";
const baseUrl = "https://reqres.in/api";

export default {
  async fetchAllUsers(context, payload) {
    try {
      const response = await axios.get(`${baseUrl}/users?page=${payload}`, {
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
      await axios.post(`${baseUrl}/users/register`, payload);
      context.dispatch("fetchAllUsers");
    } catch (error) {
      console.log(error);
    }
  },

  async login({ commit }, payload) {
    const locationKey = process.env.VUE_APP_LOCATION_API_KEY;
    const IPkey = process.env.VUE_APP_IP_DATA_API_KEY;

    try {
      const response = await axios.post(`${baseUrl}/login`, payload);
      localStorage.setItem("token", response.data.token);

      const getIP = await axios.get(`https://api.ipdata.co/?api-key=${IPkey}`);
      const IP = getIP.data.ip;
      console.log(IP);
      const getLocation = await axios.get(
        `https://api.apilayer.com/ip_to_location/${IP}`,
        { headers: { apikey: `${locationKey}` } }
      );
      commit("setUserLocation", {
        city: getLocation.data.city,
        state: getLocation.data.region_name,
        country: getLocation.data.country_name,
      });

      // console.log(userLocation.data);
      commit("toggleLoginState");
    } catch (error) {
      console.log(error);
    }
  },
};
