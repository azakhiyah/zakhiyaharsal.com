<script>
export default {
  name: 'App',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>

<template>
  <div id="app" class="app-container">
    <div class="hamburger-menu" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <nav v-if="menuOpen" class="nav-menu">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Portfolio</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
      <a href="#">Blog</a>
    </nav>
    <div class="profile">
      <div class="text-container">
        <h1 class="name"> 
          <img src="@/assets/logo.png" alt="Logo" class="inline-logo"/>akhiyah Arsal
        </h1>
        <div class="title-container">
            <p class="title">Software Engineer</p>
        </div>
      </div>
      <img src="@/assets/profile.png" alt="Profile Photo" class="profile-photo"/>
    </div>
  </div>
</template>



<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');

html, body, #app, .app-container {
  height: 100%;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  position: relative; /* Menambahkan posisi relatif ke kontainer utama */
}

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

.nav-menu a {
  color: white;
  text-decoration: none;
  padding: 5px 0;
}

.inline-logo {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  margin-right: 5px;
}

.profile {
  display: flex;
  align-items: center;
  text-align: center;
}


.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin-left: 20px;
  object-fit: cover;
  object-position: center top;
}

</style>
