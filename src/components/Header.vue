<template>
    <div id="container">
        <div id="heading">
            <video id="videoBG" poster="poster.JPG" autoplay muted loop>
                <source src="../assets/bgheader.mp4" type="video/mp4">
            </video>
        </div>

        <div id="informations">
            testing that
        </div>
    </div>

</template>

<script>
    import Category from "./Category";
    export default {
        components: {Category}
    }
</script>

<style scoped>
#container {
    position: relative;
}
#heading {
    height: 100vh;
    width: 100vw;
    overflow:hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
}
#videoBG {
    width:auto;
    min-height: 100vh;
}

#informations {
    position: relative;
    z-index: 2;
}

</style>