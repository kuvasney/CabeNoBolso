<template>
  <div class="pagetemplate">
    <cnbHeader v-if="$route.fullPath !== '/'" />
    <!-- Sidebar />
    <loading-messages :active="isLoading" ref="loader"></loading-messages> -->
    <nuxt />
    <!-- <Footer /> -->
  </div>
</template>
<script>
import cnbHeader from '~/components/header'
export default {
  name: 'DefaultLayout',
  components: {
    cnbHeader
  }
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
    margin: 0 auto;
    background: #f6f6f6 url('../assets/img/bg_in.svg') no-repeat center top;
    background-size: 100% auto;

    @include large {
      width: 800px;
    }
  }

  .page-header {
    padding: 1em 0;
    height: 22vh;
    display: flex;
    justify-content: space-between;
  }

  .cnb-logo {
    display: flex;
    color: #FFF;
    font-weight: 300;
    width: 65vw;
    font-size: 8vw;
    padding: .5em .5em 0;
    line-height: .9;

    @include large {
      width: 60%;
      font-size: 4vw;
    }

    img {
      width: 14vw;
      height: auto;
      margin-right: 15px;

      @include large {
        width: 20%;
      }
    }

    p {
      align-self: center;
    }
  }

  .centered {
    text-align: center;
  }

  .br {
    display: block;
  }

  .pagein {
    min-height: 100vh;
    padding: 1em 1em 3.5em;
    position: relative;
  }

  .pForm {
    margin-bottom: 1em;
  }

  .hide {
    display: none;
  }

  .money {
    letter-spacing: -.1em;
  }

  .btnBack {
    display: block;
    text-decoration: none;
    text-align: center;
    background: url('../assets/img/voltar.svg') no-repeat center 3px;
    background-size: auto 6vw;
    padding-top: 8vw;
    font-size: .8em;
    font-weight: 300;
    width: 13vw;
    height: 13vw;
    text-decoration: none;
    border: 2px solid $purple2;
    color: $green1;
    border-radius: 20%;
    position: relative;
    bottom: 1em;
    float: right;
  }

  .boxRounded {
    background: $alt-color;
    border-radius: 20px;
    padding: 1em;
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
    border: 0;
    font-size: 2em;
    padding: .6em 1em;
    font-weight: bold;
    font-family: 'all-round-gothic, sans-serif';
    text-decoration: none;
    background-color: $green2;
    color: $blue1;

    &.smaller {
      font-size: 1.5em;
      padding: .15em;
      border-radius: 10px;
    }

    &.transparent {
      background-color: $alt-color;
      border: 1px solid $blue4;
    }
  }

  .listDefault {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
  }

  .main-title {
    color: $blue1;
    font-weight: 600;
    font-size: 12vw;
    line-height: 1em;
    width: 70%;
  }

  .section-title {
    color: $blue1;
    font-weight: 600;
    font-size: 9vw;
    line-height: 1em;
  }

  // TRANSITIONS
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

  .reveal-down-enter-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .reveal-down-leave-active {
    transition: all .3s ease;
    transform: translate(0, -160px);
    opacity: 0;
  }
  .reveal-down-enter, .reveal-down-leave-to
  /* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
    opacity: 0;
  }
</style>
