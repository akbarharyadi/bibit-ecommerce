<template>
    <div class="flex items-center justify-center p-3 sm:p-6 md:w-full"  style="background-color: white;">
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
                                    <select v-model="form.quantity" class="form-select appearance-none
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
                                <div class="w-full md:w-1/3 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        NIK
                                    </label>
                                    <input v-model="form.identity_number"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="text" placeholder="NIK">
                                </div>
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
                                <div class="w-full mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-alamat">
                                        Tujuan Penanaman
                                    </label>
                                    <textarea v-model="form.description"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="grid-address" type="text" placeholder="Tujuan Penanaman"></textarea>
                                </div>
                            </div>

                            <div class="flex flex-wrap mb-6">
                                <div class="w-full md:w-1/3 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        latitude
                                    </label>
                                    <input v-model="form.latitude" @change="calculateY"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="number" placeholder="Latitude">
                                </div>
                                <div class="w-full md:w-1/3 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        longitude
                                    </label>
                                    <input v-model="form.longitude" @change="calculateX"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="number" placeholder="Longitude">
                                </div>

                                <div class="w-full md:w-1/6 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        Luas Lahan
                                    </label>
                                    <input v-model="form.wide"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="number" placeholder="Luas Lahan">
                                </div>

                                <div class="w-full">
                                    <p class="text-gray-600 text-xs italic">Isi sesuai dengan dengan lokasi yang akurat
                                    </p>
                                </div>
                            </div>

                            <div class="flex flex-wrap mb-6">
                                <div class="w-full md:w-1/6 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        derajat (y)
                                    </label>
                                    <input v-model="form.level_y" changes="calculateLat"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="number" placeholder="Derajat (y)">
                                </div>

                                <div class="w-full md:w-1/6 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        Menit (y)
                                    </label>
                                    <input v-model="form.minute_y" @change="calculateLat"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="number" placeholder="Menit (y)">
                                </div>

                                <div class="w-full md:w-1/6 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        Sekon (y)
                                    </label>
                                    <input v-model="form.second_y" @change="calculateLat"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="number" placeholder="Sekon (y)">
                                </div>
                            </div>
                            <div class="flex flex-wrap mb-6">

                                <div class="w-full md:w-1/6 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        derajat (x)
                                    </label>
                                    <input v-model="form.level_x" @change="calculateLong"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="number" placeholder="Derajat (x)">
                                </div>

                                <div class="w-full md:w-1/6 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        Menit (x)
                                    </label>
                                    <input v-model="form.minute_x" @change="calculateLong"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="number" placeholder="Menit (x)">
                                </div>

                                <div class="w-full md:w-1/6 mb-6 md:mb-0 mx-1">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-first-name">
                                        Sekon (x)
                                    </label>
                                    <input v-model="form.second_x" @change="calculateLong"
                                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        id="grid-first-name" type="number" placeholder="Sekon (x)">
                                </div>
                            </div>

                            <div class="flex flex-wrap -mx-3 mb-6">
                                <div class="w-full px-3">
                                    <div id="map-wrap" style="height: 400px">
                                        <client-only>
                                            <l-map style="height: 350px" :zoom="zoom" :center="center" :key="mapKey">
                                                <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                                                <l-marker :lat-lng="[form.latitude, form.longitude]"><l-popup>Koordinat
                                                        Penanaman</l-popup></l-marker>
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
                quantity: '',
                identity_number: '',
                name: '',
                address: '',
                wide: null,
                description: '',
                latitude: 0,
                longitude: 0,
                level_y: null,
                minute_y: null,
                second_y: null,
                level_x: null,
                minute_x: null,
                second_x: null,
                goods: null,
                type: 1
            },
            url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
            attribution:
                '&copy; <a target="_blank" href="https://osm.org/copyright">OpenStreetMap</a> contributors',
            center: [2.9595, 99.0687],
            mapKey: 1
        }
    },
    computed: {
        zoom() {
            return 8
        },
    },
    methods: {
        goStep2() {
            this.$emit('go', 2);
        },
        calculateLong() {
            let longitude = parseInt(this.form.level_x) + (this.form.minute_x / 60) + (this.form.second_x / 3600)
            this.form.longitude = longitude > -180 && longitude < 180 ? longitude : this.form.longitude
        },
        calculateLat() {
            let latitude = parseInt(this.form.level_y) + (this.form.minute_y / 60) + (this.form.second_y / 3600)
            this.form.latitude = latitude > -180 && latitude < 180 ? latitude : this.form.latitude
        },
        calculateX() {
            let d = parseInt(this.form.longitude)
            let md = Math.abs(this.form.longitude - d) * 60
            let m = parseInt(md)
            let sd = parseInt((md - m) * 60)
            this.form.level_x = d
            this.form.minute_x = m
            this.form.second_x = sd
        },
        calculateY() {
            let d = parseInt(this.form.latitude)
            let md = Math.abs(this.form.latitude - d) * 60
            let m = parseInt(md)
            let sd = parseInt((md - m) * 60)
            this.form.level_y = d
            this.form.minute_y = m
            this.form.second_y = sd
        },
        async submitForm() {
            try {
                this.form.goods = this.product.title
                await this.$axios.$post('submission', this.form)
                this.$swal({
                    icon: 'success',
                    title: 'Pengajuan Tersimpan',
                    text: 'Data pengajuan berhasil tersimpan, sialhkan tunggu verifikasi petugas dan informasi selanjutnya. Terimakasih',
                    onClose: () => {
                        
                    }
                }).then(()=> {
                    this.$router.push({ name: 'index' })
                });
            } catch (error) {
                console.log(error)
            }
        },
        getLocation() {
            const me = this
            if (process.client) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (params) {
                        console.log(params)
                        me.center = [params.coords.latitude, params.coords.longitude]
                        me.form.latitude = params.coords.latitude
                        me.form.longitude = params.coords.longitude
                        me.mapKey += 1
                        me.calculateX()
                        me.calculateY()
                    });
                } else {
                    console.log('notfound')
                }
            }
        }
    },
    created() {
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