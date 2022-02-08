import { mapGetters } from 'vuex'
import Utils from '@/plugins/utils'
import MockInstallments from '@/components/mocks/ofertas.json'

export default {
  components: {
    MockInstallments
  },
  data () {
    return {
      availableOffers: [],
      singleOffer: null,
      selectedOffer: {}
    }
  },
  computed: {
    ...mapGetters({
      activeOffer: 'offers/getActiveOffer'
    })
  },
  methods: {
    init () {
      if (Object.keys(this.activeOffer).length > 0) {
        this.buildOffers()
      } else {
        this.$router.push('/minhas-dividas')
      }
    },
    buildOffers () {
      if (process.env.NUXT_ENV_SETUP !== 'nodata') {
        console.log('later')
      } else {
        this.availableOffers = MockInstallments.installments
      }
      // OFERTA A VISTA SELECIONADA
      this.handlePickedOffer(this.availableOffers[0])
    },
    getProductLogo (logo) {
      return Utils.getProductLogo(logo)
    },
    handlePickedOffer (offer) {
      this.selectedOffer = offer
      this.$store.commit('offers/setDealObject', offer)
    },
    offerSelected () {
      this.$router.push('/pagamento')
    }
  },
  mounted () {
    this.init()
  }
}
