import MockAcordos from '@/components/mocks/acordos.json'

export const state = () => ({
  deals: []
})

export const actions = {
  loadDeals ({ commit, dispatch }) {
    console.log('loading?')
    if (process.env.NUXT_ENV_SETUP !== 'nodata') {
      // later punk
    } else {
      commit('setDeals', MockAcordos.Deals)
    }
  }
}

export const mutations = {
  setDeals (state, deals) {
    state.deals = deals
  }
}

export const getters = {
  getDeals (state) {
    return state.deals
  }
}
