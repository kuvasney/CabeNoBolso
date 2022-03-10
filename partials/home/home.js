import faq from '@/components/faq'
import questions from '@/components/questions.json'

export default {
  components: {
    faq
  },
  data () {
    return {
      faq: questions.faq
    }
  },
  methods: {
    login () {
      this.$router.push('/minhas-dividas')
    }
  }
}
