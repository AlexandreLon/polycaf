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

<!-- <style scope> scope quand on veut pas que les components en dessous -->
<style>
  :root{
    --color-blue: #18A8F0;
  }
  body{
    font-family: Montserrat, "sans-serif";
    padding: 0;
    margin: 0;
  }
</style>
