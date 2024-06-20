<template>
    <div class="home flex flex-col items-center justify-center min-h-screen">
      <div class="profile flex flex-row items-center justify-center">
        <div class="text-container flex flex-col items-start mr-5">
          <h1 class="name text-7xl font-bold">Zakhiyah Arsal</h1>
          <div class="title-container bg-gray-200 text-black px-4 py-2 mt-4 rounded">
            <p class="title text-5xl">Software Engineer</p>
          </div>
        </div>
        <img src="@/assets/profile.png" alt="Profile Photo" class="profile-photo w-64 h-64 rounded-full border-2 border-white object-cover object-top">
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home'
});
</script>

<style scoped>
/*
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: white;
  text-align: center;
  animation: fadeIn 1s ease-in-out;
}

.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
  animation: fadeIn 2s ease-in-out;
}

.name {
  font-size: 4em;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.title-container {
  background-color: white;
  color: black;
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 5px;
}

.title {
  font-size: 1.5em;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.profile-photo {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
  object-position: center top;
  animation: fadeIn 3s ease-in-out;
}
  */
</style>
