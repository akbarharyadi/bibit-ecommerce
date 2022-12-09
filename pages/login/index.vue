<template>
    <section class="h-full gradient-form bg-gray-200 md:h-screen">
        <div class="container py-12 px-6 h-full">
            <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <div class="xl:w-10/12">
                    <div class="block bg-white shadow-lg rounded-lg">
                        <div class="lg:flex lg:flex-wrap g-0">
                            <div class="lg:w-8/12 px-4 md:px-0">
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
                                    <div class="text-center">
                                        <p class="mb-4">Silahkan login dengan akun google Anda.</p>
                                        <div class="flex justify-center pt-1 mb-1 pb-1">
                                            <a href="http://localhost:4000/auth/google" data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                                class="text-black flex items-center inline-block px-12 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                                                style="background-color: #8ad300;">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"
                                                    class="w-4 h-4">
                                                    <path fill="currentColor"
                                                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                                                </svg> + Masuk dengan Google Akun (Perorangan)
                                            </a>
                                        </div>
                                        <div class="flex justify-center pt-1 mb-1 pb-1">
                                            <button type="button" data-mdb-ripple="true"
                                                data-mdb-ripple-color="light"
                                                class="text-black flex items-center inline-block px-12 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                                                style="background-color: #8ad300;">
                                                Masuk atau Daftar (Kelompok)
                                            </button>
                                        </div>
                                        <p class="mb-4">Anda akan dialihkan dari halaman ini untuk login dengan akun
                                            google Anda.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:w-4/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                                style="background: #8ad300;">
                                <img src="../../static/login-bibit.webp" class="w-full" alt="Bibit Picture" />
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
    methods:{}
};
</script>