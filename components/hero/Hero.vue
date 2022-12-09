<template>
  <!-- Jumbotron -->
  <div class="jb p-12 text-center relative overflow-hidden bg-no-repeat bg-cover">
    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
      style="background-color: rgba(0, 0, 0, 0.6)">
      <div class="flex justify-center items-center h-full">
        <div class="text-white">
          <h2 class="font-semibold text-4xl mb-4">BIBIT E-COMMERCE</h2>
          <h4 class="font-semibold text-md mb-1">KEMENTRIAN LINGKUANGAN HIDUP DAN KEHUTANAN</h4>
          <p class="mb-1">DIREKTORAT JENDERAL PENGELOLAAN DAS DAN REHABILITAS HUTAN</p>
          <p class="mb-4">BALAI PENGELOLAAN DAERAH ALIRAN SUNGAI DAN HUTAN LINDUNG ASAHAN
            BARUMUN</p>
          <nuxt-link :to="{ name: 'login' }" v-if="!isUserLoggedIn"
            class="inline-block px-7 py-3 mb-1 border-2 border-gray-200 text-gray-200 font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            role="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Masuk Akun</nuxt-link>
        </div>
      </div>
    </div>
  </div>
  <!-- Jumbotron -->
</template>

<script>
export default {
  name: 'VmHeader',
  computed: {
    numProductsAdded() {
      return this.$store.getters.productsAdded.length;
    },
    isUserLoggedIn() {
      return this.$auth.loggedIn;
    },
    getUserName() {
      let name = this.$auth.user.name;

      if (name === '') {
        return 'user';
      } else {
        return name;
      }
    },
    getEmail() {
      let eamil = this.$auth.user.email;

      if (eamil === '') {
        return 'email';
      } else {
        return eamil;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.jb {
  background: url('../../static/bgslide.webp');
  background-position: 50% 50%;
  height: 550px;
  width: 100%;
}
</style>