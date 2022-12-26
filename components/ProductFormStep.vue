<template>
  <div class="flex items-center min-h-screen bg-gray-50">
    <div class="flex-1 h-full max-w-6xl mx-auto bg-white rounded-lg shadow-xl">
      <div class="flex flex-col md:flex-row">
        <div class="h-32 md:h-auto md:w-1/3">
          <img class="object-cover w-full"  style="height:500px;" :src="product.images" alt="img" />
        </div>
        <step-1 :product="product" @go="goStep" v-show="step == 1"></step-1>
        <step-2 :product="product" @go="goStep" v-show="step == 2"></step-2>
        <step-3 :allowedBibit="allowedBibit" :product="product" @go="goStep" v-show="step == 3"></step-3>
      </div>
    </div>
  </div>
</template>

<script>
import step1 from './Form/step1.vue';
import Step2 from './Form/step2.vue';
import Step3 from './Form/step3.vue';
export default {
  components: { step1, Step2, Step3 },
  name: 'products',
  props: ['product', 'detail'],
  data() {
    return {
      step: 1,
      allowedBibit: []
    }
  },
  methods: {
    goStep(step) {
      this.step = step
    }
  },
  created(){
    for (let index = 5; index <= 100; index+=5) {
      this.allowedBibit.push(index)
      
    }
  }
}
</script>