<template>
  <div>
    <NavbarComponent />
    <div class="container">
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
                Cart
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>My Order</h2>
          <div class="table-responsive mt-3">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, index) in keranjangs" :key="keranjang.id">
                  <th>{{index + 1}}</th>
                  <td><img :src="'../img/' + keranjang.product.gambar" class="img-fluid shadow" width="250" /></td>
                  <td>{{keranjang.product.nama}}</td>
                  <td>{{keranjang.keterangan}}</td>
                  <td>{{keranjang.jumlah_pemesanan}}</td>
                  <td>{{keranjang.product.harga}}</td>
                  <td>{{keranjang.product.harga * keranjang.jumlah_pemesanan}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent.vue";
import axios from 'axios';
export default {
  name: "CartView",
  components: {
    NavbarComponent,
  },
  data(){
    return {
      keranjangs: []
    }
  },
  methods: {
    setKeranjang(data) {
      this.keranjangs = data;
    }
  },
  mounted(){
    axios
    .get("http://localhost:3000/keranjangs")
    .then((response) => this.setKeranjang(response.data))
    .catch((error) => console.log(error));
  },
};
</script>
