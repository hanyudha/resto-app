<template>
  <div>
    <NavbarComponent />
    <div class="container">
      <h1>Food List</h1>
    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
  name: "FoodsView",
  components: {
    NavbarComponent,
  },
};
</script>
