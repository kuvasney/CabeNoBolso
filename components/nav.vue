<template>
  <div class="mainNav">
    <button :class="{navOn: navIsOn}" class="btnNav" @click="openNav()">
      Menu
    </button>
    <nav v-show="navIsOn" class="mainNav__links">
      <ul>
        <li class="mainNav__links--highlight" @click="navIsOn = !navIsOn">
          <nuxt-link to="/minhas-dividas">
            <i class="icon icon-debts" />
            <span>Renegociações Abertas</span>
          </nuxt-link>
        </li>
        <li @click="navIsOn = !navIsOn">
          <nuxt-link to="/meus-acordos">
            <i class="icon icon-deals" />
            <span>Acordos</span>
          </nuxt-link>
        </li>
        <li @click="navIsOn = !navIsOn">
          <nuxt-link to="/ajuda">
            <i class="icon icon-help" />
            <span>Ajuda</span>
          </nuxt-link>
        </li>
        <li @click="navIsOn = !navIsOn">
          <nuxt-link to="/">
            <i class="icon icon-exit" />
            <span>Sair</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  name: 'CnbNav',
  data () {
    return {
      navIsOn: false
    }
  },
  methods: {
    openNav () {
      this.navIsOn = !this.navIsOn
    }
  }
}
</script>
<style lang="scss">
.btnNav {
  width: 12vw;
  height: 12vw;
  border: 0;
  background-color: transparent;
  background-image: url('../assets/img/menu.svg');
  background-size: 70% auto;
  background-position: center;
  background-repeat: no-repeat;
  text-indent: -999em;

  &.navOn {
    background-image: url('../assets/img/menu_on.svg');
    background-color: $alt-color;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
}

.mainNav {
  align-self: center;
  margin-right: 1em;
}

.mainNav__links {
  position: absolute;
  right: 1em;
  background: $alt-color;
  border-radius: 20px;
  border-top-right-radius: 0;
  width: 90vw;
  padding: 1em;
  z-index: 9999;
  margin-top: -2px;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 1em;
    text-align: center;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 20vw;
      height: 20vw;
      border: 2px solid $purple4;
      border-radius: 20px;
      color: $green1;
      font-weight: 300;
      text-decoration: none;
    }

    &.mainNav__links--highlight {
      width: 100%;

      a {
        flex-direction: row;
        width: 100%;
      }

      .icon {
        padding: 0 3em;
      }

      span {
        font-size: 1.5em;
        text-align: left;
      }
    }
  }

  .icon {
    width: 10vw;
    height: 10vw;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    margin-bottom: .3em;
  }

  .icon-debts {
    background-image: url('../assets/img/debts.svg');
  }

  .icon-deals {
    background-image: url('../assets/img/deals.svg');
  }

  .icon-help {
    background-image: url('../assets/img/question.svg');
  }

  .icon-exit {
    background-image: url('../assets/img/logout.svg');
  }

}
</style>
