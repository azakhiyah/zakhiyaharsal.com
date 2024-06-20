<template>
  <div :class="theme">
    <div class="hamburger-menu cursor-pointer flex flex-col justify-between w-8 h-6 absolute top-5 right-5" @click="toggleMenu">
      <div class="bar h-1 w-full bg-current"></div>
      <div class="bar h-1 w-full bg-current"></div>
      <div class="bar h-1 w-full bg-current"></div>
    </div>
    <nav v-if="menuOpen" class="nav-menu absolute top-16 right-5 bg-black text-white border border-white rounded-lg p-4 flex flex-col space-y-2">
      <router-link to="/" @click.native="closeMenu" class="nav-link">Home</router-link>
      <router-link to="/about" @click.native="closeMenu" class="nav-link">About</router-link>
      <a href="#" @click="closeMenu" class="nav-link">Portfolio</a>
      <a href="#" @click="closeMenu" class="nav-link">Services</a>
      <a href="#" @click="closeMenu" class="nav-link">Contact</a>
      <a href="#" @click="closeMenu" class="nav-link">Blog</a>
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
    const theme = ref('dark'); // Default to dark theme

    function toggleMenu() {
      menuOpen.value = !menuOpen.value;
    }

    function closeMenu() {
      menuOpen.value = false;
    }

    function toggleTheme() {
      theme.value = theme.value === 'dark' ? 'light' : 'dark';
      document.documentElement.classList.toggle('dark', theme.value === 'dark');
    }

    return {
      menuOpen,
      toggleMenu,
      closeMenu,
      theme,
      toggleTheme,
    };
  },
});
</script>

<style scoped>

.nav-link {
  @apply text-white no-underline py-1;
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  @apply bg-white text-black rounded py-2 px-2;
}
/*
.dark .theme-button {
  --button-bg: white;
  --button-color: black;
  --button-hover-bg: lightgray;
  --link-hover-bg: white;
  --link-hover-color: black;
}

.light .theme-button {
  --button-bg: black;
  --button-color: white;
  --button-hover-bg: gray;
  --link-hover-bg: black;
  --link-hover-color: white;
}
*/
</style>
