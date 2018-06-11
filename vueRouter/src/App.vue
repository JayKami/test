<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <div>
        <button @click="goBack">后退</button>
        <button @click="goGo">前进</button>
        <button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">Home</router-link> |
    <router-link to="/params/198/jspang website is very good">params</router-link> |
    <router-link to="/goHome">goHome</router-link> |
    <router-link to="/goParams/918/I like vue.js">goParams</router-link> |
    <router-link to="/hi1">Hi1</router-link> |
    <router-link to="/jspang">jspang</router-link>
    <router-link to="/33344">我是瞎写的</router-link>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <!-- <router-view name="left" style="float:left;width:50%;height:300px;background-color:#ccc;"/>
    <router-view name="right" style="float:left;width:50%;height:300px;background-color:#c0c;"/> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goGo() {
      this.$router.go(1);
    },
    goHome() {
      this.$router.push('/');
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0px;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}

</style>
