import { mapGetters } from 'vuex'
import Utils from '@/plugins/utils.js'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      offers: 'offers/getOffers'
    })
  },
  methods: {
    init () {
      this.getOffers()
    },
    getOffers () {
      if (this.offers.length < 1) {
        this.$store.dispatch('offers/loadOffers')
      }
    },
    getProductLogo (logo) {
      return Utils.getProductLogo(logo)
    },
    openDebt (debt) {
      this.$store.commit('offers/setActiveOffer', debt)
      this.$router.push('/metodo-de-pagamento')
    }
  },
  mounted () {
    this.init()
  }
}
