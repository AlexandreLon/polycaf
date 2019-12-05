<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}


let video = null;
let nav = null;
let detailsContainer = null;
let menuSize = null;

window.addEventListener("scroll", function(){
  if(video === null)
    video = document.getElementById("videoBG");
  if(nav === null)
    nav = document.getElementsByTagName("nav")[0];
  if(detailsContainer === null)
    detailsContainer = document.getElementById("details-container");
  if(menuSize === null)
    menuSize = nav.offsetHeight;

  let height = video.offsetHeight;
  let scrollY = window.scrollY;
  let newSize = menuSize;
  let size = 1;
  let opacity = scrollY/height;
  if(opacity > 0.4)
    opacity = 0.4;
  let ratio = scrollY/height;
  size = size-(ratio/2);
  newSize *= size;
  if(newSize < 50)
    newSize = 50;
  nav.style.height = newSize+"px";
  detailsContainer.style.opacity = 1-(opacity/5);
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
