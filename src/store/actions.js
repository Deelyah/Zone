export default {
  async signUp(context) {
    try {
      const response = await axios.get("https://reqres.in/api/users/2");
      context.commit("setUser", response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  },

  async login(context) {
    try {
    } catch (error) {
      console.log(error);
    }
  },
};
