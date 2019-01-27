<template>
  <div id="app">
 
    <!-- <div id="nav">
      <router-link to="/">PokèDex</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->

        <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="./assets/logo.png" width="28" height="28">
          </a>
      
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">
              Pokèdex
            </router-link>
            
            <router-link to="/about" class="navbar-item">
              About
            </router-link>
      
            <a class="navbar-item" href="https://github.com/Fieel/vue-pokedex">
              Source code
            </a>
      
          </div>
      
        </div>
      </nav>

    <router-view/>

  </div>
</template>

<style lang="scss">
#app {
  text-align: center;
  min-height: 100vh;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  ::-webkit-scrollbar {
    display: none;
  }
</style>
