<template>
  <div id="app" class='bg bg-light pb-3'>

    <div id="nav">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">App Factory</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class='nav-item'>
                        <router-link :to="{name:'AppForm'}">Add New</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'About'}">About</router-link> 
                    </li>
                    <li class="nav-item">
                        <a href='https://cafeamericano.github.io/appGalleryLite/' target='_blank'>Keyword Factory</a> 
                    </li>
                    <li class="nav-item">
                        <a href='https://cafeamericano.github.io/appGalleryLite/' target='_blank'>App Gallery</a> 
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    <router-view />
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh
}

nav {
  padding: 30px;
}

#nav a {
    margin-right: 20px;
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
