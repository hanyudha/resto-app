<template>
  <div class="home">
    <NavbarComponent />
    <div class="container">
      <HeroComponent />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from '@/components/NavbarComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    HeroComponent
  },
};
</script>
