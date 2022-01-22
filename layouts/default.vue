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
    // word-spacing: 1px;
    padding: 0;
    margin: 0;
  }

  .pagetemplate {
    width: 100%;
    // min-height: 100vh;
    padding: 0;
    margin: 0;
  }
</style>
