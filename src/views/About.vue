<template>      
    <div class="about">
      <h1 class="about-title">About Me</h1>
      <div class="about-content">
          Hi, I'm Zakhiyah Arsal, a passionate Software Engineer with a knack for creating efficient and innovative software solutions.
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'About',
});
</script>

<style scoped>
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
    font-size: 3em;
    margin-bottom: 20px;
    font-family: 'Roboto', sans-serif;
  }
  
  .about-content {
    background-color: white;
    color: black;
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }
</style>
  