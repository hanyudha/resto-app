<template>
  <div>
    <NavbarComponent />
    <div class="container">
      <h1>Cart List</h1>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
  name: "CartView",
  components: {
    NavbarComponent,
  },
};
</script>
