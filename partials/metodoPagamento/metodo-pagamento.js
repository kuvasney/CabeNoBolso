import CnbModal from '@/components/cnb-modal'
export default {
  name: 'metodo-de-pagamento',
  components: {
    CnbModal
  },
  data () {
    return {
      debtValue: 4832.66,
      paymentGadget: {
        minValue: 1,
        parcel: Number,
        value: 50
      },
      gadgetValue: 50,
      speedometer: {
        pointer: -110,
        groove: -135
      },
      proposalStaus: Number
    }
  },
  watch: {
  },
  methods: {
    /**
     * Starting methods for metodo-de-pagamento
     */
    init () {
      this.paymentGadget.parcel = (this.debtValue / 2).toFixed(2)
      this.setSpeedometer(50)
    },
    /**
     * Set the parcel value
     * @param {number} pValue parcel value wished
     * @param {number} pRange range
     * @param {number} mode the modes: 1 moves the range, 2 changes the money input
     */
    parcelValue (pValue, pRange, mode) {
      let _ret
      if (mode === 2) {
        _ret = pRange
        this.paymentGadget.parcel = ((pValue / 100) * pRange).toFixed(2)
      } else {
        _ret = (pValue / this.debtValue) * 100
        this.gadgetValue = _ret
      }
      this.setSpeedometer(_ret)
    },
    /**
     * Moves the speedometer
     * @param {num} spoRange range
     */
    setSpeedometer (spoRange) {
      this.speedometer.pointer = spoRange * 2.2 - 110
      this.speedometer.groove = parseInt(spoRange) * 1.8 + 315
      if (spoRange <= 30) { this.proposalStaus = 1 }
      if (spoRange >= 31) { this.proposalStaus = 2 }
      if (spoRange >= 70) { this.proposalStaus = 3 }
    },
    /**
     * Build the deal object and go to payment page
     */
    dealOk () {
      this.$router.push('/pagamento')
    },
    /**
     * Envia um pedido para o componente modal
     */
    openModal () {
      this.$refs.proposalModal.showModal()
    },
    closeModal () {
      this.$refs.proposalModal.closeModal()
    }
  },
  mounted () {
    this.init()
  }
}
