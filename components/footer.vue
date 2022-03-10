<template>
  <div class="page-footer">
    <div class="cnb-logo">
      <img src="../assets/img/cabenobolso_logo.svg" alt="">
      <span>Cabe no <span class="br">seu Bolso</span></span>
    </div>
    <div class="page-footer__text">
      <p>
        CNPJ: 01.234.567/0001-00
      </p>
      <p>
        Rua Teste, 100 - Vila Algum Lugar - São Paulo/SP - CEP: 01769-420
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CnbFooter'
}
</script>

<style lang="scss">
  .page-footer {
    background-color: #a9aaad;

    .cnb-logo {
      margin: 1em auto;

      @include large {
        font-size: 3em;
      }
    }
  }

  .page-footer__text {
    color: $alt-color;
    width: 95%;
    margin: 1em auto;
  }
</style>
