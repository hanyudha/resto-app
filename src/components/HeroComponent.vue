<template>
  <div class="hero">
    <!--Desktop-->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h1>
                <strong>Delicious Food Menu,</strong> <br />in your gadget
              </h1>
              <h3>
                Pesan dan Pilih
                <span class="fst-italic fw-bolder"
                  ><VueWriter :array="arr" :eraseSpeed="50" :typeSpeed="50"
                /></span>
                favorit anda
              </h3>
              <br />
              <router-link to="/foods" class="btn btn-lg btn-success">
                Pesan
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <img src="../assets/images/hero.png" width="700" />
        </div>
      </div>
    </div>

    <!--Mobile-->
    <div class="d-sm-block d-md-none">
      <div class="row mt-4">
        <div class="col-md-6">
          <img
            src="../assets/images/hero.png"
            style="width: 100%; object-fit: contain"
          />
        </div>
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h1>
                <strong>Delicious Food Menu,</strong> <br />in your gadget
              </h1>
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
      </div>
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
