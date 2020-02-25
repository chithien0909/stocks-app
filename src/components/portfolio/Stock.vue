<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(Price: {{stock.price}})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
                  type="number"
                  class="form-control"
                  placeholder="Quantity"
                  v-model="quantity"
                  :class="{danger: insufficientQuantity}"
          >
          <span>In stocks: {{stock.quantity}}</span>
        </div>
        <div class="pull-right">
          <button
            @click="sellStock"
            class="btn btn-success"

            :disabled="quantity <= 0 || insufficientQuantity"
          >
            {{insufficientQuantity ? 'Not enough' : 'Sell'}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0,
            }
        },
        computed: {
          insufficientQuantity() {
            return this.quantity > this.stock.quantity;
          }
        },
        methods: {
            ...mapActions({
                placeSellOrder: 'sellStock'
            }),
            sellStock() {
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                };
                this.placeSellOrder(order);
                this.quantity = 0;
            }
        }
    }
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>
