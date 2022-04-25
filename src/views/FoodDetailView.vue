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

      <div class="row mt-3">
        <div class="col-md-6">
          <img :src="'/img/' + products.gambar" class="img-fluid shadow" />
        </div>
        <div class="col-md-6">
          <h2>
            <strong>{{ products.nama }}</strong>
          </h2>
          <hr />
          <h4>
            Harga: <strong>Rp. {{ products.harga }}</strong>
          </h4>
          <form v-on:submit.prevent>
            <div class="form-group mt-4">
              <label for="jumlah_pemesanan">Jumlah Pesanan</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.jumlah_pemesanan"
              />
            </div>
            <div class="form-group mt-3">
              <label for="keterangan">Keterangan</label>
              <textarea
                v-model="pesan.keterangan"
                class="form-control"
                placeholder="Keterangan spt: Pedas, nasi setengah ..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="btn btn-success mt-3"
              @click="pemesanan"
            >
              <b-icon-cart></b-icon-cart> Pesan
            </button>
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
      pesan: {},
    };
  },
  methods: {
    setProduct(data) {
      this.products = data;
    },
    pemesanan() {
      if (this.pesan.jumlah_pemesanan) {
        this.pesan.product = this.products;
        axios
          .post("http://localhost:3000/keranjangs", this.pesan)
          .then(() => {
            this.$router.push({ path: "/foods"})
            this.$toast.success("Sukses masuk keranjang.", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissable: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.error("Jumlah Pesanan harus diisi", {
          type: "error",
              position: "top-right",
              duration: 3000,
              dismissable: true,
        });
      }
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
