import Vue from 'vue'

Vue.filter('toMoney', function (value) {
  if (!value) { return '' }

  return parseFloat(value).toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
})

Vue.filter('toNumber', function (value) {
  if (!value) { return '' }

  return parseFloat(value)
})

Vue.filter('toStringMoney', function (value) {
  if (!value) { return '' }

  return value.toString().replace('.', ',')
})

Vue.filter('toBRDate', function (value) {
  if (!value) { return '' }
})

Vue.filter('trim', function (value, limit = 30) {
  if (!value) { return '' }
  return value.substring(0, limit)
})
