<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}

window.addEventListener("scroll", function(){
  let video = document.getElementById("videoBG");
  let nav = document.getElementsByTagName("nav")[0];
  let detailsContainer = document.getElementById("details-container");
  let height = video.offsetHeight;
  let scrollY = window.scrollY;
  let menuSize = nav.offsetHeight;
  let size = 1;
  let opacity = scrollY/height;
  if(opacity > 0.4)
    opacity = 0.4;
  if(menuSize < 50)
    menuSize = 50;

  nav.style.height = newSize+"px";
  detailsContainer.style.opacity = 1-(opacity/4);
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
