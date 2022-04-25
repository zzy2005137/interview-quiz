<template>
  <div id="nav">
    <router-link to="/">Welcome</router-link> |
    <router-link to="/question">Question</router-link> |
    <router-link to="/review">Review</router-link>
  </div>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  background-image: linear-gradient(
    to left bottom,
    hsl(215, 100%, 85%) 0%,
    hsl(55, 100%, 85%) 100%
  );
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
