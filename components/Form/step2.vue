<template>
    <div class="flex items-center justify-center p-3 sm:p-6 md:w-2/3" style="background-color: white;">
        <div class="w-full">
            <h6 class="mb-4 text-sm">Step2/3</h6>
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
                    STEP 2 - Persyaratan
                </a>
            </div>

            <div class="mb-4 legal-document-results">
                <div data-v-11b4eedd="" data-v-164ff72a="" class="results__agreement-preview">
                    <h4> Download Persyartan</h4>
                    <p> Silahkan download persyartan dibawah ini kemudian isi secara lengkap dan upload kembali pada step berikutnya. </p>
                    <br>
                    <h4> List Persyaratan yang perlu disiapkan: </h4>
                    <ul>
                        <li> Scan KTP </li>
                        <li> Sketsa/Gambar/Foto lahan pertanian </li>
                        <li> Koordinat tempat pertanian (format latlong atau/dan DMS (derajat (°), menit ('), dan sekon ("))) </li>
                    </ul>
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
                                " :class="'text-black'" :style="'border-color: blue'" @click="goStep1()" >
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
                                " :class="'text-black'" :style="'border-color: rgb(62, 185, 145);'" @click="goStep3()" >
                    Selanjutnya
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'step-2',
    props: ['product'],
    data() {
        return {
            form: {
                accepted: false
            }
        }
    },
    methods: {
        goStep3(){
            this.$emit('go', 3);
        },
        
        goStep1(){
            this.$emit('go', 1);
        }
    }
}
</script>


<style scoped>
.results__agreement-preview {
    max-height: 300px;
    padding: 40px;
}

.results__agreement-preview {
    max-height: 300px;
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

.legal-document-results .results__agreement-preview h4, .legal-document-results .results__agreement-preview ul, .legal-document-results .results__agreement-preview p:not(:last-of-type) {
    margin-bottom: 16px;
}
.legal-document-results .results__agreement-preview h4 {
    font-weight: 700;
}
.legal-document-results .results__agreement-preview h4, .legal-document-results .results__agreement-preview ul, .legal-document-results .results__agreement-preview p:not(:last-of-type) {
    margin-bottom: 16px;
}

.legal-document-results .results__agreement-preview ul {
    list-style-position: inside;
}

ul {
    list-style-type: disc;
}

</style>