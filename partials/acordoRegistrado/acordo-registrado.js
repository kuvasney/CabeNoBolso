export default {
  data () {
    return {
      copied: false
    }
  },
  methods: {
    copyCode () {
      /* Get the text field */
      const copyText = document.getElementById('barCode')

      /* Select the text field */
      copyText.select()
      copyText.setSelectionRange(0, 99999) /* For mobile devices */

      /* Copy the text inside the text field */
      document.execCommand('copy')

      /* Alert the copied text */
      this.copied = true
      setTimeout(() => {
        this.copied = false
      }, 5000)
    }
  }
}
