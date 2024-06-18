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
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
  color: white;
  text-align: center;
}

.name {
  font-size: 6vw;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.profile {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.title-container {
  background-color: white;
  color: black;
  padding: 5px 10px;
  margin-top: 10px;
  border-radius: 5px;
}

.title {
  font-size: 4vw;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-photo {
  width: 40vw;
  height: 40vw;
  max-width: 250px;
  max-height: 250px;
  border-radius: 50%;
  border: 2px solid white;
  margin-top: 20px;
  object-fit: cover;
  object-position: center top;
}
</style>
