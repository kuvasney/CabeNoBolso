import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      activeDeal: null
    }
  },
  computed: {
    ...mapGetters({
      deals: 'deals/getDeals'
    })
  },
  methods: {
    init () {
      this.getDeals()
    },
    getDeals () {
      if (this.deals.length < 1) {
        this.$store.dispatch('deals/loadDeals')
      }
    },
    getProductLogo (logo) {
      const images = require.context('../../assets/img/logos/', false, /\.svg$/)
      return images('./' + logo + '.svg')
    },
    setActiveDeal (deal) {
      this.activeDeal === deal ? this.activeDeal = null : this.activeDeal = deal
    }
  },
  mounted () {
    this.init()
  }
}
