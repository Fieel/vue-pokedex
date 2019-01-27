<template>
  <div id="app">

        <nav id="nav" class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <div class="navbar-item" >
            <img src="./assets/logo.png" width="28" height="28">
          </div>
      
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
            
            <router-link to="/berries" class="navbar-item">
              Pokèberries
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
  }
  #nav {
    // height: 10vh;    
    box-shadow: 0 2px 3px rgba(10,10,10,.1), 0 0 0 1px rgba(10,10,10,.1);
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: red;
      }
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
</style>
