<template>
  <div class="page-header">
    <div class="container">
      <div class="cnb-logo">
        <img src="../assets/img/cabenobolso_logo.svg" alt="">
        <p class="client-presentation">
          Olá, <br>
          <strong>
            Francisco
          </strong>
        </p>
      </div>
    </div>
    <CnbNav />
  </div>
</template>

<script>
import CnbNav from '@/components/nav'
export default {
  name: 'CnbHeader',
  components: {
    CnbNav
  }
}
</script>
