<template>
    <section class="h-full gradient-form bg-gray-200 md:h-screen">
        <div class="container py-12 px-6 h-full">
            <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <div class="xl:w-10/12">
                    <div class="block bg-white shadow-lg rounded-lg">
                        <div class="lg:flex lg:flex-wrap g-0">
                            <div class="lg:w-full px-4 md:px-0">
                                <div class="md:p-12 md:mx-6">
                                    <div class="text-center">
                                        <img class="mx-auto w-48" src="../../static/logo-merce.png" alt="logo" />
                                        <h4 class="font-semibold pb-1 mb-1">BIBIT E-COMMERCE</h4>
                                        <h4 class="font-semibold pb-1 mb-1">KEMENTRIAN LINGKUANGAN HIDUP DAN KEHUTANAN
                                        </h4>
                                        <p class="mb-1">DIREKTORAT JENDERAL PENGELOLAAN DAS DAN REHABILITAS HUTAN</p>
                                        <p class="mb-4">BALAI PENGELOLAAN DAERAH ALIRAN SUNGAI DAN HUTAN LINDUNG ASAHAN
                                            BARUMUN</p>
                                    </div>
                                    <hr>
                                    <br>
                                    <div class="text-center">
                                        <p class="mb-4">Selamat datang user, silahakan klik tombol di bawah untuk
                                            memulai memilih bibit.</p>
                                        <div class="flex justify-center pt-1 mb-1 pb-1">
                                            <nuxt-link :to="{ name: 'index' }" style="background-color: #8ad300;"
                                                class="flex items-center inline-block px-12 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                                                <span class="text-lg text-black">Pilih Bibit</span>
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: "login",
    methods: {
        async getUser() {
            await this.$auth.fetchUser()
        }
    },
    mounted() {
        let token = this.$route.fullPath.split('/')[2]
        this.$auth.strategy.token.set(token)
        this.getUser();
        console.log(token);
    }
};
</script>