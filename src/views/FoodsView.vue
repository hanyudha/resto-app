<template>
  <div>
    <NavbarComponent />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h1>Food List</h1>
        </div>
      </div>

      <div class="row mt-3">
        <div class="input-group flex-nowrap">
          <input
            v-model="search"
            type="text"
            class="form-control"
            placeholder="Looking for foods"
            aria-label="Search"
            aria-describedby="addon-wrapping"
            @keyup="searchFood"
          />
          <span class="input-group-text" id="addon-wrapping"
            ><b-icon-search class="text-success"></b-icon-search
          ></span>
        </div>
      </div>

      <div class="row mb-4">
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
import NavbarComponent from "@/components/NavbarComponent.vue";
import CardProductComponent from "@/components/CardProductComponent.vue";
import axios from "axios";

export default {
  name: "FoodsView",
  components: {
    NavbarComponent,
    CardProductComponent,
  },
  data() {
    return {
      products: [],
      search: '',
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    searchFood(){
      axios
      .get("http://localhost:3000/products?q="+this.search)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>
