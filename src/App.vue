<template>
  <div id="navbar">
    <SideBar />
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
