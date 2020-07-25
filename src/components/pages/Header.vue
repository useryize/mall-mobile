<template>
    <van-row class="headerBox" type="flex" justify="center">
        <van-col span="4" class="flex">
            <van-icon name="location-o" color="#ffffff" size=".2rem" />
        </van-col>
        <van-col span="16">span: 8</van-col>
        <van-col span="4">span: 8</van-col>
    </van-row>
</template>

<script>
export default {};
</script>

<style scoped>
.headerBox {
    height: 0.4rem;
    font-size: 0.12rem;
    background-color: #f05a23;
}
.flex {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>