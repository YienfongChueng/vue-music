<template>
    <div class="layout">
        <layout-header class="layout-header">header</layout-header>
        <layout-main class="layout-main">main</layout-main>
        <layout-footer class="layout-footer">footer</layout-footer>
    </div>
</template>

<script>
import LayoutMain from './main/main.vue';
import LayoutFooter from './footer/footer.vue';
import LayoutHeader from './header/header.vue';

export default {
  name: 'layout',
  components: {LayoutMain,LayoutFooter,LayoutHeader}
}
</script>

<style lang="scss">
$width: 1200px;

.layout {
    width: $width;
    height: 100%;
    min-height: 500px;
    margin: 0 auto;
    position: relative;
}
</style>
