<template>      
  <div class="about flex flex-col items-center justify-center min-h-screen bg-black text-white p-5">
    <h1 class="about-title text-4xl font-bold mb-6">About Me</h1>
    <div class="about-content bg-white text-black p-6 rounded-lg max-w-lg text-center">
      Hi, I'm <b>Zakhiyah Arsal</b>, a curious and enthusiastic individual embarking on a new adventure in the remote work world.
      I previously worked as a software engineer at an energy distribution company.
      With extensive experience in integrating tools and sensors into applications for commercial environments,
      I am now exploring the full stack development landscape. My journey is driven by a passion for technology and a commitment to continuous learning and growth in the dynamic field of software development.
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'About',
});
</script>

<style scoped>
/* 
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
}

.about-title {
  font-size: 2.5em; // Adjusted font size for better readability 
  margin-bottom: 20px;
  font-family: 'Arial', sans-serif; // Changed to a more readable font
}

.about-content {
  background-color: white;
  color: black;
  padding: 30px; // Increased padding for better spacing 
  border-radius: 10px;
  max-width: 700px; // Increased max-width for better readability
  font-family: 'Arial', sans-serif; /* Changed to a more readable font
  font-size: 1.2em; // Adjusted font size for better readability
  line-height: 1.6; // Increased line height for better readability
  text-align: left; // Changed text alignment to left for better readability
}
*/
</style>
