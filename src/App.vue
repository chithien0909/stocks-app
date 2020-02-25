<template>
  <div class="container">
    <app-header/>
    <div class="row">
      <div class="col-md-12">
        <transition name="slide" mode="out-in">
          <router-view/>
        </transition>
      </div>
    </div>

  </div>
</template>

<script>
    import Header from './components/Header.vue';
    export default {
        components: {
            appHeader: Header,
        },
        created() {
            this.$store.dispatch('initStocks');
        }
    }
</script>

<style>
  .slide-enter-active{
    animation: slide-in 0.2s ease-in forwards;
  }
  .slide-leave-active{

    animation: slide-out 0.2s ease-in forwards;
  }
  @keyframes slide-in {
    from{
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes slide-out {

    from{
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-30px);
      opacity: 0;
    }
  }
</style>
