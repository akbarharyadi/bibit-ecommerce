<template>
  <div :class="[detail ? 'detail' : '']" class="rounded-2xl shadow-xl shadow-slate-300/60">
    <div class="img-wrapper rounded-t-2xl">      
      <div class="flex items-center justify-between mb-3">
        <div class="media-content">
          <span :class="[detail ? 'text-3xl' : 'text-lg']">{{ product.title }}</span>
        </div>
      </div>
      <img class="rounded-t-2xl" :src="product.images" alt="Placeholder image" style="height:400px;width:100%;">
    </div>
    <div class="text-wrapper p-4 mt-4">
      <div class="flex items-center justify-between mb-3">
        <div class="media-content">
        </div>
      </div>
      <div class="content is-clearfix mb-4">
        <p :class="[detail ? 'text-2xl' : 'text-base']">{{ product.description }}</p>
      </div>
      <hr>
      <div class="content is-clearfix mt-4">
          <div class="flex flex-col items-center">
            <form class="w-full">
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Nama Lengkap Pemohon
                  </label>
                  <input v-model="form.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Nama Lengkap">
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-alamat">
                    Alamat
                  </label>
                  <textarea v-model="form.address" @change="search" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" placeholder="Alamat Lengkap">
                    </textarea>
                    <p class="text-gray-600 text-xs italic">Isi Alamat lengkap berdasarkan peta dibawah</p>
                </div>
              </div>
              
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Desa/Kelurahan
                  </label>
                  <input v-model="form.village" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Kecamatan
                  </label>
                  <input v-model="form.district" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Kabupaten/Kota
                  </label>
                  <input v-model="form.city" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
                </div>
              </div>
              
              <div class="flex flex-wrap -mx-3 mb-2">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                    Luas Area
                  </label>
                  <input v-model="form.area" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" placeholder="Albuquerque">
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    status Lahan
                  </label>
                  <input v-model="form.status" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-alamat">
                    Tujuan Penanaman
                  </label>
                  <textarea v-model="form.address" @change="search" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" placeholder="Alamat Lengkap">
                    </textarea>
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <div id="map-wrap" style="height: 400px">
                    <client-only>
                      <l-map :zoom=13 :center="[2.9595, 99.0687]" @click="selectMarker">
                        <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                        <l-marker :lat-lng="form.latLng"></l-marker>
                      </l-map>
                    </client-only>
                  </div>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'products',
  props: ['product', 'detail'],

  data () {
    return {
      addToCartLabel: 'Ajukan',
      viewDetailsLabel: 'Details',
      selected: 1,
      quantityArray: [],
      form: {
        latLng: [2.9595, 99.0687],
        address: ''
      }
    }
  },

  mounted () {
  },

  computed: {
    isUserLogged () {
      return this.$store.getters.isUserLoggedIn;
    }
  },

  methods: {
    selectMarker(event) {
      this.form.latLng = event.latlng;
    },
    async search(){
      console.log(this.form.address)
      this.$nextTick(async () => {
        if (this.form.address.length > 4) {
          if (process.client) {
            const { OpenStreetMapProvider } = require('leaflet-geosearch');
            const provider = new OpenStreetMapProvider();
            const results = await provider.search({ query: this.form.address });
            console.log(results)
          }
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail {
    @apply flex;
    @apply flex-col;
    @apply lg:flex-row;
    @apply m-5;
    @apply shadow-2xl;

    .img-wrapper {
      flex: 1;

      img {
        @apply lg:rounded-none;
        @apply lg:rounded-tl-2xl;
        @apply lg:rounded-bl-2xl;
      }
    }

    .text-wrapper {
      flex: 2;
    }
  }
</style>
