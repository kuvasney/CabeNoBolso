const Utils = {

  /**
   * Get the logo URI
   * @param {String} logo the logo name
   * @returns string
   */
  getProductLogo (logo) {
    const images = require.context('../assets/img/logos/', false, /\.svg$/)
    return images('./' + logo + '.svg')

    // return `./assets/img/logos/${logo}.svg`
  }
}
export default Utils
