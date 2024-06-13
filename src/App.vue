<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <header>
    <div class="nav-wrapper">
      <RouterLink to="/" class="logo-link">
        <img alt="Vue logo" class="logo" src="@/assets/images/weather-app-logo.png"/>
      </RouterLink>
      <nav class="nav">
        <RouterLink to="/" class="link">Home</RouterLink>
        <RouterLink to="/favorites" class="link">Favorites</RouterLink>
      </nav>
    </div>
  </header>
  <main class="main">
    <RouterView/>
  </main>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
}

.logo {
  display: flex;
  width: 143px;
  height: 100px;

  &-link {
    display: flex;
    align-items: center;
  }
}

.nav {
  width: fit-content;
  font-size: 18px;

  &-wrapper {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
  }
}

//nav a.router-link-exact-active {
//}
//
//nav a.router-link-exact-active:hover {
//}

nav a {
  margin-left: 24px;

  &:first-child {
    margin-left: 0;
  }
}
</style>
