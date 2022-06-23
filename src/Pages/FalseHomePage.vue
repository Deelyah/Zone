<template>
  <div
    class="background flex justify-center items-center h-screen sticky top-0 overflow-scroll w-full"
  >
    <div class="w-3/5 px-5 py-20 bg-gray-200 shadow-xl text-blue-700">
      <h1 class="text-center">
        <router-link to="/login">Welcome! Login to proceed</router-link>
      </h1>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url("../assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
