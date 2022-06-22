<template>
  <div
    class="background flex justify-center items-center h-screen sticky top-0 overflow-scroll w-full"
  >
    <div class="w-full h-screen px-5 py-20 text-white">
      <h1 class="font-semibold text-5xl">Zone</h1>
      <p
        class="text-left w-full sm:w-3/5 font-light text-sm mt-10 text-gray-300"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
        nobis distinctio minima dolor quos, nam placeat inventore pariatur dicta
        aperiam temporibus consequuntur eligendi officiis ea eaque qui est,
        saepe corporis sint deleniti laborum, voluptatibus ipsa! Est unde esse
        suscipit fugit.
      </p>

      <div class="sm:flex w-2/3">
        <button
          type="submit"
          class="px-3 py-2 text-white bg-transparent rounded-full mt-8 mr-5 border border-white hover:bg-blue-500"
        >
          <router-link to="/myaccount">My account</router-link>
        </button>

        <button
          type="submit"
          class="px-8 py-2 text-white bg-transparent mt-8 border border-white rounded-full hover:bg-blue-500"
        >
          <router-link to="/users">Users</router-link>
        </button>
      </div>
      <!-- <p>What would you like to do?</p>
      <div class="flex justify-between">
        <div class="shadow-lg p-5">
          <p>Go to my account</p>
          
        </div>
        <div class="shadow-lg p-5">
          <p>Go to my account</p>
          <button
            type="submit"
            class="w-full px-2 py-2 text-white bg-gray-400 rounded mt-8"
          >
            <router-link to="/myaccount">Users</router-link>
          </button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.background {
  background-image: url("../assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
