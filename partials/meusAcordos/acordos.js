import { mapGetters } from 'vuex'
import CnbModal from '@/components/cnb-modal'

export default {
  components: {
    CnbModal
  },
  data () {
    return {
      activeDeal: {}
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
    setActiveDeal (deal, index) {
      this.activeDeal.dealId === index ? this.activeDeal = {} : this.activeDeal = deal
    },
    filterInstallments (inst) {
      return inst.filter(ins => ins.status !== 'paga')
    },
    /**
     * Envia um pedido para o componente modal
     */
    openModal () {
      this.$refs.detailsModal.showModal()
    },
    closeModal () {
      this.$refs.detailsModal.closeModal()
    }
  },
  mounted () {
    this.init()
  }
}
