<template>
  <div class="food-detail">
    <NavbarComponent />
    <div class="container">
      <!-- breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav style="--bs-breadcrumb-divider: '/'" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark text-decoration-none"
                  >Home</router-link
                >
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark text-decoration-none"
                  >Foods</router-link
                >
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Food Order
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img :src="'/img/' + products.gambar" class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ products.nama }}</strong>
          </h2>
          <hr />
          <h4>Harga: <strong>Rp. {{ products.harga }}</strong></h4>
          <form>
            <div class="form-group">
              <label for="jumlah_pemesanan">Jumlah Pesanan</label>
              <input type="number" class="form-control" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NavbarComponent from "@/components/NavbarComponent.vue";

export default {
  name: "FoodDetailView",
  components: {
    NavbarComponent,
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
      .get("http://localhost:3000/products/" + this.$route.params.id)
      .then((response) => this.setProduct(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
