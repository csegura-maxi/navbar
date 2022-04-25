<template>
  <div id="navbar">
    <div class="w-100 p-3">
      <b-button v-b-toggle.sidebar>Toggle Menu</b-button>
    </div>
    <b-sidebar id="sidebar" title="MAXI" backdrop-variant="light" backdrop>
      <SideBar />
    </b-sidebar>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>
