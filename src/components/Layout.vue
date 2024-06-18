<template>
  <div>
    <div class="hamburger-menu" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <nav v-if="menuOpen" class="nav-menu">
      <router-link to="/" @click.native="closeMenu" class="nav-link">Home</router-link>
      <router-link to="/about" @click.native="closeMenu" class="nav-link">About</router-link>
      <a href="#" class="nav-link">Portfolio</a>
      <a href="#" class="nav-link">Services</a>
      <a href="#" class="nav-link">Contact</a>
      <a href="#" class="nav-link">Blog</a>
    </nav>
    <router-view />
  </div>
</template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'Layout',
    setup() {
      const menuOpen = ref(false);
  
      function toggleMenu() {
        menuOpen.value = !menuOpen.value;
      }

      function closeMenu() {
      menuOpen.value = false;
    }
  
      return {
        menuOpen,
        toggleMenu,
        closeMenu
      };
    }
  });
  </script>
  
  <style scoped>
  .hamburger-menu {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 25px;
  }
  
  .bar {
    height: 3px;
    width: 100%;
    background-color: white;
  }
  
  .nav-menu {
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: black;
    border: 1px solid white;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
  
  .nav-link {
    color: white;
    text-decoration: none;
    padding: 5px 0;
  }

  .nav-link:hover {
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 5px 10px;
}
  </style>
  