<template>
  <div class="sidebar p-4 bg-maxi">
    <div class="item-list" v-for="item in items" :key="item.name">
      <p class="item text-start fw-bold" v-b-toggle="item.name">
        <b-icon class="me-2" :icon="item.icon"></b-icon> {{ item.label }}
      </p>
      <b-collapse :id="item.name" accordion="my-accordion" role="tabpanel">
        <b-nav vertical class="text-start">
          <b-nav-item
            link-classes="text-white"
            v-for="child in item.childs"
            :key="child.name"
            :to="child.to"
            >{{ child.name }}</b-nav-item
          >
        </b-nav>
      </b-collapse>
    </div>
  </div>
</template>
<script>
import { navItems } from '../utils/index.js'

export default {
  name: "SideBar",
  data() {
    return {
      items: navItems
    };
  },
};
</script>
<style scoped>
.sidebar {
  min-height: calc(100vh - 55px);
}
.item {
  color: #ffffff;
}
.item:hover {
  color: #80b3ee;
}
</style>
