<template>
  <div class="relative overflow-hidden h-screen">
    <header class="flex justify-between p-4 items-center w-full shadow-lg">
      <h1 class="text-blue-700 text-3xl font-semibold">Zone</h1>
      <div>
        <button>
          <router-link
            to="/signup"
            class="w-full px-2 py-2 mr-2 mt-8 text-gray-800 border-2 border-b-blue-700 rounded hover:bg-blue-700 hover:text-white"
          >
            My account</router-link
          >
        </button>

        <button>
          <router-link
            to="/users"
            class="w-full px-2 py-2 mr-2 mt-8 text-gray-800 border-2 border-b-blue-700 rounded hover:bg-blue-700 hover:text-white"
          >
            Users</router-link
          >
        </button>

        <button>
          <router-link
            to="/login"
            class="w-full px-2 py-2 m-auto mt-8 text-gray-800 border-2 border-b-blue-700 rounded hover:bg-blue-700 hover:text-white"
          >
            Sign in
          </router-link>
        </button>
      </div>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url(https://fonts.googleapis.com/css2?family=Arvo:wght@100;200;300;400;500;600;700&display=swap);

body,
h1,
p {
  font-family: "Arvo", serif;
}
html {
  margin: 0;
  padding: 0;
}
</style>
