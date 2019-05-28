<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
	height: auto;
	font-family: "microsoft yahei";
}
/* @media screen and (max-width: 1200px) {
    html {
        font-size: calc(112.5% + 4 * (100vw - 1200px) / 1200);
    }
}
@media screen and (min-width: 1000px) {
    html {
        font-size: calc(137.5% + 5 * (100vw - 1000px) / 1000);
    }
} */
</style>
