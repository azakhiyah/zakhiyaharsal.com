<template>
  <div class="home">
    <div class="profile">
      <div class="text-container">
        <h1 class="name">Zakhiyah Arsal</h1>
        <div class="title-container">
          <p class="title">Software Engineer</p>
        </div>
      </div>
      <img src="@/assets/profile.png" alt="Profile Photo" class="profile-photo"/>
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
</style>
