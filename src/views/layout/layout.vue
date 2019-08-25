<template>
    <div class="layout">
        <div class="layout-header">
            header
        </div>
        <div class="children">children</div>
    </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style lang="scss">
$width: 1200px;

.layout {
    width: $width;
    &:hover {
        color: #f00;
    }
    &-header {
        font-size: 50px;
    }
    .children {
        color: #0f0;
    }
}
</style>
