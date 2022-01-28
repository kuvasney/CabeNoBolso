export default {
  name: 'metodo-de-pagamento',
  data () {
    return {

      paymentGadget: {
        minValue: 1,
        maxValue: 100,
        debtValue: 3180.5,
        parcel: 10,
        value: 50
      },
      gadgetValue: 50,
      speedometer: {
        pointer: -110,
        groove: -135
      }
    }
  },
  watch: {
    gadgetValue () {
      this.parcelValue(this.gadgetValue)
    }
  },
  methods: {
    parcelValue (v) {
      const _tv = this.paymentGadget.debtValue
      const _parcel = (_tv / 100) * v
      this.paymentGadget.parcel = _parcel.toFixed(2)
      // this.speedometer.pointer = parseInt(v) >= 50 ? parseInt(v) * 2.2 - 110 : parseInt(v) * 2.2 - 110
      this.speedometer.pointer = parseInt(v) * 2 - 100
      this.speedometer.groove = parseInt(v) * 1.8 + 315
    }
  }
}
