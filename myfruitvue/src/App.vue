<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">水果大甩卖</router-link> |
      <router-link to="/pay">付款</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #nav{
    width: 100%;
    line-height: 50px;
    text-align: center;
  }
</style>
