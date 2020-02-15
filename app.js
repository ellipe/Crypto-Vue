// Component Coin-Detail renders information of the desired coin
Vue.component('coin-detail', {
  props: ['coin'],

  data() {
    return {
      showPrices: false,
      value: 0
    };
  },

  created() {
    console.log('Created Coin-Detail');
  },

  mounted() {
    console.log('Mounted Coin-Detail');
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices;
      this.$emit('change-color');
    }
  },

  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol}`;
    },

    convertedValue() {
      if (!this.value) {
        return 0;
      }

      return this.value / this.coin.price;
    }
  },

  template: `
    <div>
      <img 
        v-bind:src="coin.img" v-bind:alt="coin.name" 
        v-on:mouseover="toggleShowPrices"  
        v-on:mouseout="toggleShowPrices"
      />
      <h1 v-bind:class="coin.changePercent > 0 ? 'green': 'red'">
          {{ title }}
          <span v-if="coin.changePercent > 0"> 👍 </span>
          <span v-else-if="coin.changePercent === 0"> 🤞 </span>
          <span v-else="coin.changePercent < 0"> 👎 </span>
          <span v-on:click="toggleShowPrices">
            {{showPrices ? '🙉':'🙈'}}
          </span>
      </h1>
      <input type="number" v-model="value">
      <span> {{ convertedValue }}</span>
      <slot name="text"></slot>
      <ul v-show="showPrices">
      <li 
        class="uppercase"
        v-bind:class="{ orange : p.value === coin.price, red: p.value < coin.price, green: p.value > coin.price }"
        v-bind:key="p.day"
        v-for="(p, index) in coin.pricesWithDays" 
        >
        {{ p.day }}: {{ p.value }}
      </li>
    </ul>
    </div>
    `
});

new Vue({
  el: '#app',

  data() {
    return {
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 10,
        price: 8400,
        pricesWithDays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9000 },
          { day: 'Viernes', value: 12000 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 }
        ]
      },

      color: 'f4f4f4'
    };
  },

  created() {
    console.log('Created');
  },

  mounted() {
    console.log('Mounted');
  },

  methods: {
    updateColor() {
      // Night mode
      this.color = this.color
        .split('')
        .reverse()
        .join('');
    }
  },

  computed: {
    backgroundColor() {
      return `#${this.color}`;
    }
  }
});
