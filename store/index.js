export const state = () => ({
  products: [
    {
      id: 1,
      title: 'Alpukat',
      description: 'Alpukat atau avokad (Persea americana) adalah tumbuhan penghasil buah meja dengan nama sama.',
      quantity: 44262,
      images: '/picture/alpukat.jpg'
    },
    {
      id: 2,
      title: 'Aren',
      description: 'Enau atau aren (Arenga pinnata, suku Arecaceae) adalah palma yang terpenting setelah kelapa (nyiur) karena merupakan tanaman serba guna.',
      quantity: 54975,
      images: '/picture/aren.jpg'
    },
    {
      id: 3,
      title: 'Durian',
      description: 'Durian adalah nama tumbuhan tropis yang berasal dari wilayah Asia Tenggara, sekaligus nama buahnya yang bisa dimakan.',
      quantity: 128153,
      images: '/picture/durian.jpg'
    },
    {
      id: 4,
      title: 'Jengkol',
      description: 'engkol atau jering (Archidendron pauciflorum, sinonim: A. jiringa, Pithecellobium jiringa, dan P. lobatum) adalah tumbuhan khas di wilayah Asia Tenggara.',
      quantity: 128153,
      images: '/picture/Jengkol.jpg'
    },
    {
      id: 5,
      title: 'Kayu Afrika',
      description: 'Kayu Afrika atau Meisopsis eminii (Sumber: Google image) Maesopsis eminii Engl. atau dikenal dengan nama local kayu afrika adalah salah satu jenis kayu yang termasuk kedalam family Rhamnaceae.',
      quantity: 128153,
      images: '/picture/Kayu afrika.jpg'
    },
    {
      id: 6,
      title: 'Kemenyan',
      description: 'Kemenyan, sering juga disebut Olibanum,[1] adalah aroma wewangian berbentuk kristal yang digunakan dalam dupa dan parfum.',
      quantity: 128153,
      images: '/picture/Kemenyan.jpg'
    },
    {
      id: 7,
      title: 'Kemiri',
      description: 'Bibit Kemiri Sunan Kemiri atau dalam bahasa Latin Aleurites Trisperma Blanco adalah tanaman biji yang masih tergolong ke dalam tanaman rempah-rempah.',
      quantity: 128153,
      images: '/picture/Kemiri.jpg'
    },
    {
      id: 8,
      title: 'Ketapang Kencana',
      description: 'Ketapang kencana (Terminalia mantaly) adalah sejenis tumbuhan peneduh berwujud pohon. Tajuknya yang mendatar dan berlapis-lapis, sebagaimana kerabat satu marganya, ketapang T. catappa, membuatnya juga menjadi penghias taman rumah dan kebun.',
      quantity: 128153,
      images: '/picture/Ketapang kencana.jpg'
    },
    {
      id: 9,
      title: 'Kopi',
      description: 'Kopi adalah minuman hasil seduhan biji kopi yang telah disangrai dan dihaluskan menjadi bubuk.',
      quantity: 128153,
      images: '/picture/Kopi.jpg'
    },
    {
      id: 10,
      title: 'Mahoni',
      description: 'Mahoni termasuk pohon besar dengan tinggi pohon mencapai 35–40 m dan diameter mencapai 125 cm.',
      quantity: 128153,
      images: '/picture/Mahoni.jpg'
    },
    {
      id: 11,
      title: 'Makadamia Anti Api',
      description: 'Macadamia adalah genus dari delapan spesies tumbuhan dari familia Proteaceae, tersebar di Australia timur (7 spesies), dan Sulawesi.',
      quantity: 128153,
      images: '/picture/Makadamia anti api.jpg'
    },
    {
      id: 12,
      title: 'Makadamia Nut',
      description: 'Macadamia adalah genus dari delapan spesies tumbuhan dari familia Proteaceae, tersebar di Australia timur (7 spesies), dan Sulawesi.',
      quantity: 128153,
      images: '/picture/Makadamia nut.jpg'
    },
    {
      id: 13,
      title: 'Mangga',
      description: 'Mangga atau mempelam adalah nama sejenis buah, demikian pula nama pohonnya. Mangga termasuk ke dalam genus Mangifera, yang terdiri dari 35-40 anggota dari famili Anacardiaceae.',
      quantity: 128153,
      images: '/picture/Mangga.jpg'
    },
    {
      id: 14,
      title: 'Meranti',
      description: 'Meranti adalah anggota dari suku Dipterocarpaceae (meranti-merantian) yang terdiri dari pohon-pohon besar yang menjadi penyusun utama sebagian besar hutan tropika basah pada kawasan dataran rendah tropis Asia.',
      quantity: 128153,
      images: '/picture/Meranti.jpg'
    },
    {
      id: 15,
      title: 'Petai',
      description: 'Petai, pete (IPA:pətɛ), atau mlanding (Parkia speciosa) merupakan pohon tahunan tropika dari famili polong-polongan (Fabaceae), subfamili petai-petaian (Mimosoidae). Tumbuhan ini tersebar luas di Nusantara bagian barat.',
      quantity: 128153,
      images: '/picture/Petai.jpg'
    },
    {
      id: 16,
      title: 'Pinus',
      description: 'Pohon ini berasal dari famili yang sama dengan pohon fir dan pohon spruce, yaitu famili Pinaceae dengan genus pinus. Pinus atau tusam cocok tumbuh di daerah dataran tinggi.',
      quantity: 128153,
      images: '/picture/Pinus.jpg'
    },
    {
      id: 17,
      title: 'Pucuk Merah',
      description: 'Klasifikasi dan Morfologi dari Pucuk Merah (Syzygium oleana) - Pucuk merah dikenal sebagai tanaman hias, karena daun muda atau pucuknya ketika tumbuh akan berwarna merah, sedangkan daun yang sudah tua berwarna hijau.',
      quantity: 128153,
      images: '/picture/Pucuk merah.jpg'
    },
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
