<template>
  <div>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link
            tag="a"
            to="/"
            class="navbar-brand">
            Stock Trader
          </router-link>
        </div>
        <!--collapse navbar-collapse-->
        <div id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <router-link tag="li" activeClass="active" to="/portfolio">
              <a>Portfolio</a>
            </router-link>
            <router-link tag="li" activeClass="active" to="stocks">
              <a>Stocks</a>
            </router-link>
          </ul>
          <strong class="navbar-text navbar">Funds: {{funds | currency}}</strong>
          <ul class="nav navbar-nav navbar-right">
            <li @click="endDay">
              <a style="cursor: pointer">End Day</a>
            </li>
            <li
              @click="isDropdownOpen = !isDropdownOpen"
              class="dropdown" :class="{open: isDropdownOpen}">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">Save & Load
                <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li @click="saveData"><a style="cursor: pointer">Save Data</a></li>
                <li @click="loadData" style="cursor: pointer"><a>Load Data</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
      data() {
          return {
              isDropdownOpen: false
          }
      },
      computed: {
          ...mapGetters([
              'stocks',
              'stockPortfolio',
              'funds'
          ])
      },
      methods: {
          ...mapActions({
            randomizeStocks: 'randomizeStocks',
            fetchData: 'loadData'
          }),
          endDay() {
            this.randomizeStocks();
          },
          saveData(){
            const data = {
                stockPortfolio: this.stockPortfolio,
                stocks: this.stocks,
                funds: this.funds
            };
            this.$http.put('data.json', data);
          },
          loadData() {
            this.fetchData();
          }
      }
    }
</script>

<style>
  body{
    padding: 30px 0;
  }
</style>
