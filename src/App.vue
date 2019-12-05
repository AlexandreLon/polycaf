<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

window.addEventListener("scroll", function(e){
  let video = document.getElementById("videoBG");
  let height = video.offsetHeight;
  let scrollY = window.scrollY;
  let nav = document.getElementsByTagName("nav")[0];
  let opacity = scrollY/height;
  if(opacity > 0.4)
    opacity = 0.4;
  video.style.opacity = 1-(opacity+0.2);
  nav.style.backgroundColor = "rgba(0,0,0,"+opacity+")";
});

</script>

<!-- <style scope> scope quand on veut pas que les components en dessous -->
<style>
  :root{
    --color-blue: #18A8F0;
    --dark-grey: #242424;
    --ultra-dark-grey: #181818;
  }
  body{
    background-color: var(--dark-grey);
    font-family: Montserrat, "sans-serif";
    padding: 0;
    margin: 0;
  }
</style>
