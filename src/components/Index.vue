<template>
    <div>
        <Menu></Menu>
        <Header></Header>
    </div>
</template>

<script>
    import Error404 from "./Error404";
    import Header from "./Header";
    import Menu from "./Menu";
    export default {
        name: "Index",
      components: {Menu, Error404, Header}
    }
</script>

<style scoped>

</style>
