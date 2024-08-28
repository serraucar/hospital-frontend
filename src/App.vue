<template>
  <div id="app">
    <nav>
      <router-link to="/">Doctors</router-link>
      <router-link to="/patients">Patients</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style>
nav {
  padding: 1em;
  background: #f3f3f3;
  text-align: center;
}

nav a {
  margin: 0 1em;
  text-decoration: none;
  color: #333;
}
</style>
