<template>
  <transition name="slide-fade">
    <div v-show="toShow" class="modal__wrapper">
      <div class="modal__bg" />
      <div class="modal__content">
        <slot />
      </div>
    </div>
  </transition>
</template>
<script>

export default {
  name: 'CnbModal',
  data () {
    return {
      toShow: false
    }
  },
  mounted () {
    document.onkeydown = (evt) => {
      evt = evt || window.event
      if (event.key === 'Escape') {
        this.toShow = false
      }
    }
  },
  methods: {
    showModal () {
      this.toShow = true
    },
    closeModal () {
      this.toShow = false
    }
  }
}
</script>
<style lang="scss" scoped>
  .modal__wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2000;
  }

  .modal__bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(#000, 0.7);
    z-index: 2000;
  }

  .modal__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2001;
    padding: 1em;
  }
</style>
