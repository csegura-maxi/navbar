<template>
  <div class="sidebar p-4 bg-maxi h100">
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
export default {
  name: "SideBar",
  data() {
    return {
      items: [
        {
          name: "Administration",
          label: "Administration",
          icon: "file-earmark-medical",
          childs: [
            { name: "child1", to: "/administration" },
            { name: "child2", to: "/administration2" },
            { name: "child3", to: "/administration3" },
          ],
        },
        {
          name: "Agents",
          label: "Agents",
          icon: "person-circle",
          childs: [
            { name: "child1", to: "/administration" },
            { name: "child2", to: "/administration2" },
            { name: "child3", to: "/administration3" },
          ],
        },
        {
          name: "AgentApplications",
          label: "Agent Applications",
          icon: "person-bounding-box",
          childs: [
            { name: "child1", to: "/administration" },
            { name: "child2", to: "/administration2" },
            { name: "child3", to: "/administration3" },
          ],
        },
        {
          name: "Catalogs",
          label: "Catalogs",
          icon: "card-list",
          childs: [
            { name: "child1", to: "/administration" },
            { name: "child2", to: "/administration2" },
            { name: "child3", to: "/administration3" },
          ],
        },
        {
          name: "Collection",
          label: "Collection",
          icon: "collection",
          childs: [
            { name: "child1", to: "/administration" },
            { name: "child2", to: "/administration2" },
            { name: "child3", to: "/administration3" },
          ],
        },
        {
          name: "Compliance",
          label: "Compliance",
          icon: "flag",
          childs: [
            { name: "child1", to: "/administration" },
            { name: "child2", to: "/administration2" },
            { name: "child3", to: "/administration3" },
          ],
        },
        {
          name: "OtherProducts",
          label: "Other Products",
          icon: "cart-check",
          childs: [
            { name: "child1", to: "/administration" },
            { name: "child2", to: "/administration2" },
            { name: "child3", to: "/administration3" },
          ],
        },
        {
          name: "Owner",
          label: "Owner",
          icon: "person-badge",
          childs: [
            { name: "child1", to: "/administration" },
            { name: "child2", to: "/administration2" },
            { name: "child3", to: "/administration3" },
          ],
        },
        {
          name: "Processing",
          label: "Processing",
          icon: "file-arrow-down",
          childs: [
            { name: "child1", to: "/administration" },
            { name: "child2", to: "/administration2" },
            { name: "child3", to: "/administration3" },
          ],
        },
        {
          name: "Reports",
          label: "Reports",
          icon: "file-bar-graph",
          childs: [
            { name: "child1", to: "/administration" },
            { name: "child2", to: "/administration2" },
            { name: "child3", to: "/administration3" },
          ],
        },
        {
          name: "Support",
          label: "Support",
          icon: "telephone",
          childs: [
            { name: "child1", to: "/administration" },
            { name: "child2", to: "/administration2" },
            { name: "child3", to: "/administration3" },
          ],
        },
        {
          name: "Transfer",
          label: "Transfer",
          icon: "wallet2",
          childs: [
            { name: "child1", to: "/administration" },
            { name: "child2", to: "/administration2" },
            { name: "child3", to: "/administration3" },
          ],
        },
      ],
    };
  },
};
</script>
<style scoped>
.item {
  color: #ffffff;
}

.item:hover {
  color: #80b3ee;
}
</style>
