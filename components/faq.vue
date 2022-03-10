<template>
  <ul class="faq listDefault">
    <li
      v-for="(item, index) in list"
      :key="index"
      :class="{ isActive: faqActive == index }"
    >
      <p class="question" @click="faqActive = index">
        {{ item.question }}
      </p>
      <div class="answer">
        <p
          v-for="(answer, ind) in item.answer"
          v-show="faqActive == index"
          :key="ind"
        >
          <span v-html="answer" />
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CnbFaq',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      faqActive: 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .faq {

    li {
      border-radius: 20px;
      background-color: $blue2;
      margin: 1em auto;
      cursor: pointer;
    }

    .question {
      color: #FFF;
      padding: 1em;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
    }

    .answer {
      background: #FFF;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;

      p {
        padding: 1em;
      }
    }
  }
</style>

<style lang="scss" scoped>

</style>
