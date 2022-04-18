<template>
  <div class="home">
    <NavbarComponent />
    <div class="container">
      <HeroComponent />
      <div class="row mt-4">
        <div class="col"><h2>Best Foods</h2></div>
        <div class="col text-end">
          <router-link to="/foods" class="btn btn-success float-right"
            ><b-icon-eye></b-icon-eye> Lihat semua</router-link
          >
        </div>
      </div>

      <div class="row mb-3">
        <div
          class="col-md-4 mt-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProductComponent :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroComponent from "@/components/HeroComponent.vue";
import CardProductComponent from "@/components/CardProductComponent.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarComponent,
    HeroComponent,
    CardProductComponent,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error))
  },
};
</script>
