import MockDividas from '@/components/mocks/dividas.json'

export const state = () => ({
  offers: [], // A LISTA DE OFERTAS (CONTRATOS ABERTOS)
  activeOffer: {}, // A OFERTA QUE FOI ESCOLHIDA PARA NEGOCIAÇÃO
  dealObject: {} // A OFERTA PARCELADA ESCOLHIDA
})

export const actions = {
  loadOffers ({ commit, dispatch }) {
    if (process.env.NUXT_ENV_SETUP !== 'nodata') {
      // later punk
    } else {
      commit('setOffers', MockDividas)
    }
  }
}

export const mutations = {
  setOffers (state, offers) {
    state.offers = offers
  },
  setActiveOffer (state, offer) {
    state.activeOffer = offer
  },
  setDealObject (state, offer) {
    state.dealObject = offer
  }
}

export const getters = {
  getOffers (state) {
    return state.offers
  },
  getActiveOffer (state) {
    return state.activeOffer
  },
  getDealObject (state) {
    return state.dealObject
  }
}
