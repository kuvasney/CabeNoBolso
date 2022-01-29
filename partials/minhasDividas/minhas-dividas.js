import Dividas from '@/components/mocks/dividas.json'

export default {
  data () {
    return {
      MockDividas: Dividas
    }
  },
  methods: {
    getProductLogo (logo) {
      const images = require.context('../../assets/img/logos/', false, /\.svg$/)
      return images('./' + logo + '.svg')
    },
    openDebt (debt) {
      this.$router.push('/metodo-de-pagamento')
    }
  }
}
