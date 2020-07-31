<template>
    <van-row class="headerBox" type="flex" justify="center">
        <van-col span="4" class="flex">
            <van-icon name="location-o" color="#ffffff" size=".2rem" />
        </van-col>
        <van-col class="flex" span="16">
           <input type="input" class="input" v-model="text">
        </van-col>
        <van-col span="4" class="flex">
            <van-button size="mini">查找</van-button>
        </van-col>
    </van-row>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            text: '请输入值...'
        }
    },
    created() {
        // axios
        //     .get(
        //         "../../../static/json.json"
        //     )
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });
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
.input {
    border: none 0;
    padding: 0;
    margin: 0;
    border-bottom: #d14b1a solid 1px;
    background-color: unset;
    color: #ffffff !important;
    height: 70%;
    width: 100%;
    display: block;
}
</style>