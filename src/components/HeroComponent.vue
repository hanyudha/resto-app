<template>
  <div class="row">
    <div class="col">
      <div class="d-flex h-100">
        <div class="justify-content-center align-self-center">
          <h1><strong>Delicious Food Menu,</strong> <br />in your gadget</h1>
          <h3>
            Pesan dan Pilih
            <span class="fst-italic fw-bolder"
              ><VueWriter :array="arr" :eraseSpeed="50" :typeSpeed="50"
            /></span>
            favorit anda
          </h3>
          <br />
          <button class="btn btn-lg btn-success">Pesan</button>
        </div>
      </div>
    </div>
    <div class="col">
      <img src="../assets/images/hero.png" width="700" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { arr: ["Makanan ", "Minuman", "Cemilan", "Dessert"] };
  },
  name: "HeroComponent",
};
</script>

<style></style>
