<template>
    <div class="flex items-center justify-center p-3 sm:p-6 md:w-2/3">
        <div class="w-full">
            <h6 class="mb-4 text-sm">Step3/3</h6>
            <h3 class="mb-4 text-xl font-bold text-blue-600">Pengajuan Bibit {{ product.title }}</h3>
            <div class="flex flex-wrap mx-auto">
                <a class="
                                inline-flex
                                items-center
                                justify-center
                                w-1/2
                                py-3
                                font-medium
                                leading-none
                                tracking-wider
                                text-indigo-500
                                bg-gray-100
                                border-b-2 border-indigo-500
                                rounded-t
                                sm:px-6 sm:w-auto sm:justify-start
                                ">
                    STEP 3 - Form Pengajuan
                </a>
            </div>

            <div class="mb-4 legal-document-results">
                <div data-v-11b4eedd="" data-v-164ff72a="" class="results__agreement-preview">
                    <div class="flex flex-col items-center">
                        <form class="w-full">
                            <div class="flex flex-wrap mb-6">
                                <div class="w-full md:w-1/3 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        Jumlah Bibit {{ product.title }}
                                    </label>
                                    <select class="form-select appearance-none
                                        block
                                        w-full
                                        px-3
                                        py-1.5
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding bg-no-repeat
                                        border border-solid border-gray-300
                                        rounded
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        aria-label="Default select example">
                                        <option selected>Pilih Jumlah Bibit</option>
                                        <option v-for="(value, index) in allowedBibit" :value="value" :key="index">{{
                                                value
                                        }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="flex flex-wrap mb-6">
                                <div class="w-full md:w-1/2 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        Nama Lengkap Pemohon
                                    </label>
                                    <input v-model="form.name"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="text" placeholder="Nama Lengkap">
                                </div>
                            </div>

                            <div class="flex flex-wrap mb-6">
                                <div class="w-full mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-alamat">
                                        Alamat
                                    </label>
                                    <textarea v-model="form.address"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-address" type="text" placeholder="Alamat Lengkap">
                                     </textarea>
                                    <p class="text-gray-600 text-xs italic">Isi Alamat lengkap berdasarkan letak lokasi
                                        penanaman
                                    </p>
                                </div>
                            </div>

                            <div class="flex flex-wrap mb-6">
                                <div class="w-full md:w-1/3 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        latitude awal
                                    </label>
                                    <input v-model="form.lat_awal"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="text" placeholder="Latitude Awal">
                                </div>
                                <div class="w-full md:w-1/3 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        longitude awal
                                    </label>
                                    <input v-model="form.lon_awal"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="text" placeholder="Longitude Awal">
                                </div>
                                <div class="form-check md:w-1/4">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        -
                                    </label>
                                    <input
                                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        type="checkbox" :value="true" v-model="form.accepted" id="flexCheckDefault">
                                    <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                                        Marker 1
                                    </label>
                                </div>
                            </div>

                            <div class="flex flex-wrap mb-6">
                                <div class="w-full md:w-1/3 mr-2 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        latitude akhir
                                    </label>
                                    <input v-model="form.lat_akhir"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="text" placeholder="Latitude Akhir">
                                </div>
                                <div class="w-full md:w-1/3 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        longitude akhir
                                    </label>
                                    <input v-model="form.lon_akhir"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="text" placeholder="Longitude Akhir">
                                </div>
                                <p class="text-gray-600 text-xs italic">Isi sesuai dengan dengan lokasi pada form
                                    permohonan
                                </p>
                            </div>

                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <div id="map-wrap" style="height: 400px">
                                        <client-only>
                                            <l-map style="height: 350px" :zoom="zoom" :center="center"
                                                @click="selectMarker">
                                                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                                                <l-marker :lat-lng="[form.lat_awal, form.lon_awal]"><l-popup>Koordinat
                                                        Awal</l-popup></l-marker>
                                                <l-marker :lat-lng="[form.lat_akhir, form.lon_akhir]"><l-popup>Koordinat
                                                        Akhir</l-popup></l-marker>
                                                <l-polyline :lat-lngs="pol.latlngs" :color="pol.color"></l-polyline>
                                            </l-map>
                                        </client-only>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="flex justify-between">
                <button class="
                                px-6
                                py-2
                                mt-4
                                text-sm
                                font-medium
                                leading-5
                                text-center
                                duration-150
                                bg-blue-600
                                border border-transparent
                                rounded-lg
                                hover:bg-blue-700
                                focus:outline-none
                                color-success
                                " :class="'text-black'" :style="'border-color: blue'" @click="goStep2()">
                    Sebelumnya
                </button>
                <button class="
                                px-6
                                py-2
                                mt-4
                                text-sm
                                font-medium
                                leading-5
                                text-center
                                duration-150
                                bg-blue-600
                                border border-transparent
                                rounded-lg
                                hover:bg-blue-700
                                focus:outline-none
                                color-success
                                " :class="'text-black'" :style="'border-color: rgb(62, 185, 145);'"
                    @click="submitForm()">
                    Kirim
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'step-3',
    props: ['product', 'allowedBibit'],
    data() {
        return {
            form: {
                name: '',
                address: '',
                lat_awal: 2.9595,
                lon_awal: 99.0687,
                lat_akhir: 3.02738369193888,
                lon_akhir: 99.06217575073244
            },
            url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a target="_blank" href="https://osm.org/copyright">OpenStreetMap</a> contributors',
            center: [2.9595, 99.0687],
            polyline: {
                latlngs: [[2.9595, 99.0687], [3.02738369193888, 99.06217575073244]],
                color: 'green'
            }
        }
    },
    computed: {
        zoom() {
            return 8
        },
        pol() {
            return this.polyline
        }
    },
    methods: {
        selectMarker(event) {
            console.log(event.latlng)
        },
        goStep2() {
            this.$emit('go', 2);
        },

        submitForm() {

        },

        selectMarker(event) {
            const me = this

            console.log(event)
            me.form.lat_akhir = event.latlng.lat
            me.form.lon_akhir = event.latlng.lng
            me.polyline.latLngs = [[me.form.lat_awal, me.form.lon_awal], [me.form.lat_akhir, me.form.lon_akhir]]
        },
        getLocation() {
            const me = this
            if (process.client) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (params) {
                        console.log(params)
                        me.center = [params.coords.latitude, params.coords.longitude]
                        me.form.lat_awal = params.coords.latitude
                        me.form.lon_awal = params.coords.longitude
                        me.form.lat_akhir = params.coords.latitude
                        me.form.lon_akhir = params.coords.longitude
                        me.polyline.latLngs = [[params.coords.latitude, params.coords.longitude], [params.coords.latitude, params.coords.longitude]]
                    });
                } else {
                    console.log('notfound')
                }
            }
        }
    },
    created() {
        console.log('created')
        this.getLocation()
    }
}
</script>


<style scoped>
.results__agreement-preview {
    padding: 40px;
}

.results__agreement-preview {
    padding: 16px;
    overflow-y: auto;
    color: #474b4f;
    border: 1px solid #dce2e5;
    border-radius: 4px;
}

.results__agreement-preview {
    font-family: Roboto, sans-serif;
    font-size: 14px;
    line-height: 1.43;
    color: #474b4f;
}

.legal-document-results .results__agreement-preview h4,
.legal-document-results .results__agreement-preview ul,
.legal-document-results .results__agreement-preview p:not(:last-of-type) {
    margin-bottom: 16px;
}

.legal-document-results .results__agreement-preview h4 {
    font-weight: 700;
}

.legal-document-results .results__agreement-preview h4,
.legal-document-results .results__agreement-preview ul,
.legal-document-results .results__agreement-preview p:not(:last-of-type) {
    margin-bottom: 16px;
}

.legal-document-results .results__agreement-preview ul {
    list-style-position: inside;
}

ul {
    list-style-type: disc;
}
</style>