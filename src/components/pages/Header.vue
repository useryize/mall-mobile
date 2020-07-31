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
import axios from "axios";
axios.get();
export default {
    created() {
        axios
            .get("https://www.easy-mock.com/mock/5f13ae1094896b22a7fa7636/example/index")
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    },
};
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