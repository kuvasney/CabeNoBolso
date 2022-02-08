import { mapGetters } from 'vuex'
import CnbModal from '@/components/cnb-modal'
import Utils from '@/plugins/utils.js'

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
      return Utils.getProductLogo(logo)
    },
    getPaymentLeft (deal) {
      const _sum = (val1, val2) => val1 + val2
      const _openInstallments = deal.dealInstallments.filter(d => d.status !== 'paga')
      let _leftVal = 0
      if (_openInstallments.length > 1) {
        _leftVal = deal.dealInstallments.filter(d => d.status !== 'paga').map(d => d.value).reduce(_sum)
      } else if (_openInstallments.length === 0) {
        _leftVal = 0
      } else {
        _leftVal = deal.dealValue
      }
      return _leftVal
    },
    setActiveDeal (deal) {
      if (Object.keys(this.activeDeal).length > 0) { // significa que ja ha um aberto
        this.activeDeal.dealId === deal.dealId ? this.activeDeal = {} : this.activeDeal = deal
      } else {
        this.activeDeal = deal
      }
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
