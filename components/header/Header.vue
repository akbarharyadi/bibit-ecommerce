<template>
  <nav class="flex justify-between sticky top-0 bg-white z-10 shadow-md px-3" style="background-color: #8ad300;"
    role="navigation" aria-label="main navigation">
    <nuxt-link :to="{ name: 'index' }" class="navbar-item">
      <h1 class="title w-40 h-12"></h1>
    </nuxt-link>
    <div class="flex items-center">
      <div class="mx-2">
        <div class="cursor-pointer">
          <nuxt-link :to="{ name: 'index' }"
            class="button text-green-500 leading-tight uppercase rounded hover:bg-green hover:bg-opacity-5 focus:outline-none focus:ring-0 transition ease-in-out">
            <span class="text-lg">Home</span>
          </nuxt-link>
        </div>
      </div>
      <div class="mx-2" v-if="!isUserLoggedIn">
        <div class="cursor-pointer">
          <nuxt-link :to="{ name: 'login' }"
            class="button text-green-500 leading-tight uppercase rounded hover:bg-green hover:bg-opacity-5 focus:outline-none focus:ring-0 transition ease-in-out">
            <span class="text-lg"> Login</span>
          </nuxt-link>
        </div>
      </div>
      <div class="mx-2 ">
        <button class="cursor-pointer  flex" v-if="isUserLoggedIn" @click="onShowDropdown">
          <img :src="getAvatar" class="rounded-full"
            style="height: 25px; width: 25px" alt="" loading="lazy" /> {{ getUserName }}
        </button>
        <div v-if="showDropdown && isUserLoggedIn" class="dropdown w-auto h-28">
          <a href="#" class="button text-center">
            <span class="text-lg">({{ getEmail }})</span>
          </a>
          <hr>
          <button @click="logout" class="button">
            <span class="text-lg">{{ logoutLabel }}</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'VmHeader',

  data() {
    return {
      isCheckoutActive: false,
      showDropdown: false,
      logoutLabel: 'Log out',
      loginLabel: 'Log in',
      signupLabel: 'Sign up',
      wishlistLabel: 'Wishlist',
    }
  },

  computed: {
    getAvatar(){
      let avatar = this.$auth.user.avatar;
      if (avatar === '') {
        return 'https://mdbootstrap.com/img/new/avatars/2.jpg'
      } else {
        return avatar;
      }
    },
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

  mounted() {
    window.addEventListener("blur", this.closeDropdown, true);
  },
  destroyed() {
    window.removeEventListener("blur", this.closeDropdown);
  },

  methods: {
    closeDropdown() {
      setTimeout(() => {
        this.showDropdown = false;
      }, 100);
    },
    onShowDropdown() {
      this.showDropdown = !this.showDropdown
    },
    async logout() {
      await this.$auth.logout('local')

      // redirect to homepage
      this.$router.push({ name: 'index' });
    },
  }
};
</script>

<style lang="scss" scoped>
.title {
  background: url('../../static/logo-merce.png') no-repeat;
  background-position: 50% 50%;
  background-size: 165px;
}

.dropdown {
  @apply absolute;
  @apply p-3;
  @apply bg-white;
  @apply right-0;
  @apply shadow-lg;
  @apply rounded-xl;
  @apply flex;
  @apply flex-col;
  @apply border-2;
  @apply border-grey_light;
}

.button {
  @apply w-full;
  @apply hover:bg-grey_light;
  @apply p-2;
  @apply rounded-lg;
}
</style>
