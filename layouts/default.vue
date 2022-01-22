<template>
  <div class="pagetemplate">
    <!-- <Header v-if="this.$route.fullPath != '/'" />
    <Sidebar />
    <loading-messages :active="isLoading" ref="loader"></loading-messages> -->
    <nuxt />
    <!-- <Footer /> -->
  </div>
</template>
<script>
export default {
  name: 'DefaultLayout'
}
</script>
<style lang="scss">

  @import url('../assets/fonts/fonts.scss');

  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: 'all-round-gothic, sans-serif';
    font-weight: normal;
    font-size: 1em;
    padding: 0;
    margin: 0;
    color: $gray;
  }

  .pagetemplate {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .pForm {
    margin-bottom: 1em;
  }

  .inpReg {
    border-radius: 7px;
    padding: 1em;
    height: 40px;
    border: 0;
    font-size: 1em;
    font-family: 'all-round-gothic, sans-serif';
  }

  .btnDefault {
    text-align: center;
    border-radius: 15px;
    font-size: 2em;
    border: 0;
    padding: .8em;
    font-weight: bold;
    font-family: 'all-round-gothic, sans-serif';
  }
</style>
