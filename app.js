new Vue({
  el: '#app',

  data() {
    return {
      name: 'Bitcoin',
      symbol : 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 10,

      price: 8400,
      color: 'f4f4f4',

      pricesWithDays: [
        { day: 'Lunes', value: 8400 },
        { day: 'Martes', value: 7900 },
        { day: 'Miercoles', value: 8200 },
        { day: 'Jueves', value: 9000 },
        { day: 'Viernes', value: 12000 },
        { day: 'Sabado', value: 10000 },
        { day: 'Domingo', value: 10200 },
      ],

      showPrices: false
    }
  },

  methods: {
    toggleShowPrices(){
      this.showPrices = !this.showPrices

      // Night mode
      this.color = this.color.split('').reverse().join('')
    }
  },
  watch: {
    showPrices(newVal, oldVal){
      console.log(newVal, oldVal)
    }
  },

  computed: {
    title(){
      return `${this.name} - ${this.symbol}`
    },
    backgroundColor(){
      return `#${this.color}`
    }
  }
})
