export const state = () => ({
  products: [
    {
      id: 1,
      title: 'Mahoni',
      description: 'Pohon Mahoni dapat tumbuh dengan subur di pasir payau dekat dengan pantai dan menyukai tempat yang cukup sinar matahari langsung.',
      price: 50,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 50,
      images: 'https://f1-styx.imgix.net/article/2020/03/10095150/bm1-kumpulan-biji-mahoni.png'
    },
    {
      id: 2,
      title: 'Pinus',
      description: 'Tanaman pinus memiliki berbagai manfaat untuk kesehatan dan keperluan industri. Manfaat tanaman pinus dari aspek kesehatan antara lain, mengandung Flavanoid dan Vitamin C. ',
      price: 35,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      images: 'https://cf.shopee.co.id/file/e147f6029c7ca3ba7f138b9757664916'
    },
    {
      id: 3,
      title: 'Meranti',
      description: 'Pohon meranti merah terdiri dari 22 jenis spesies, diantaranya adalah Shorea acuminata, Shorea joharensis, Shorea lepidota dan Shorea leprosula.',
      price: 110,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      images: 'https://inhutani-2.co.id/iht2_baru/album/g3.jpg'
    },
    {
      id: 4,
      title: 'Durian',
      description: 'Durian adalah nama tumbuhan tropis yang berasal dari wilayah Asia Tenggara, sekaligus nama buahnya yang bisa dimakan. Durian memiliki banyak jenis...',
      price: 50,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      images: 'http://jualbibitonline.com/wp-content/uploads/2018/08/Jual-Bibit-Durian-Musang-King-70-cm.jpg'
    },
    {
      id: 5,
      title: 'Kemiri',
      description: 'Bibit Kemiri Sunan Kemiri atau dalam bahasa Latin Aleurites Trisperma Blanco adalah tanaman biji yang masih tergolong ke dalam tanaman rempah-rempah.',
      price: 35,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      images: 'https://www.snackeroo.com/wp-content/uploads/DSC00053-Edited-1024x768.jpg'
    },
    {
      id: 6,
      title: 'Jengkol',
      description: 'Bibit jengkol atau jering adalah tanaman yang berasal dari Asia Tenggara. Di Indonesia jengkol sering dijadikan masakan yang sangat sedap dan memiliki rasa khas tersendiri.',
      price: 110,
      ratings: 5,
      reviews: 1,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      images: 'https://s0.bukalapak.com/img/0803972805/large/Bibit_Tanaman_Jengkol_Super.jpg.webp'
    },
    {
      id: 7,
      title: 'Alpukat',
      description: 'Alpukat adalah salah satu buah yang cukup populer di tanah air. Buah yang satu ini sangat terkenal sebagai jus. Warnanya yang khas dan rasanya yang nikmat menjadikannya …',
      price: 50,
      ratings: 5,
      reviews: 7,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      images: 'https://s4.bukalapak.com/img/491551736/w-1000/Bibit_Alpukat_Miki.jpg'
    },
    {
      id: 8,
      title: 'Strawberry',
      description: 'Strawberry adalah buah manis berbentuk hati berwarna merah, yang sangat disukai karena rasanya yang enak dan manfaat nutrisinya.Buah ini adalah sumber vitamin C dan mangan yang sangat baik...',
      price: 35,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      images: 'https://cdn-cas.orami.co.id/parenting/images/10506.width-1000.jpg'
    },
    {
      id: 9,
      title: 'Mangga',
      description: 'Mangga atau mempelam adalah nama sejenis buah, demikian pula nama pohonnya. Mangga termasuk ke dalam marga Mangifera, yang terdiri dari 35-40 anggota dari suku Anacardiaceae.',
      price: 110,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1,
      images: 'https://akcdn.detik.net.id/community/media/visual/2019/11/11/33ae5441-1e3d-450d-a817-373b10a9246c.jpeg'
    }
  ],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    name: '',
    productTitleSearched: ''
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  }
})

export const getters = {
  productsAdded: state => {
    return state.products.filter(el => {
      return el.isAddedToCart;
    });
  },
  productsAddedToFavourite: state => {
    return state.products.filter(el => {
      return el.isFavourite;
    });
  },
  getProductById: state => id => {
    return state.products.find(product => product.id == id);
  },
  isUserLoggedIn: state => {
    return state.userInfo.isLoggedIn;
  },
  isUserSignedUp: state => {
    return state.userInfo.isSignedUp;
  },
  getUserName: state => {
    return state.userInfo.name;
  },
  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal;
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal;
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal;
  },
  quantity: state => {
    return state.products.quantity;
  }
}

export const mutations = {
  addToCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = true;
      }
    });
  },
  setAddedBtn: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status;
      }
    });
  },
  removeFromCart: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isAddedToCart = false;
      }
    });
  },
  removeProductsFromFavourite: state => {
    state.products.filter(el => {
      el.isFavourite = false;
    });
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn;
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp;
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched;
  },
  setUserName: (state, name) => {
    state.userInfo.name = name;
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched;
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show;
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show;
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show;
  },
  addToFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = true;
      }
    });
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach(el => {
      if (id === el.id) {
        el.isFavourite = false;
      }
    });
  },
  quantity: (state, data) => {
    state.products.forEach(el => {
      if (data.id === el.id) {
        el.quantity = data.quantity;
      }
    });
  },
  SET_USER(state, authUser) {
    state.authUser = authUser
  }
}
/* 
export const actions = {
  async nuxtServerInit({ commit }) {
    const res = await this.$axios.get("/api/current_user")
    commit("SET_USER", res.data)
  },

  async logout({ commit }) {
    const { data } = await this.$axios.get("/api/logout")
    if (data.ok) commit("SET_USER", null)
  },

  async handleToken({ commit }, token) {
    const res = await this.$axios.post("/api/stripe", token)
    commit("SET_USER", res.data)
  }
} */
