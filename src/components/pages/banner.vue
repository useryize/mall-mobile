<template>
    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in bannerList" :key="index"> <img :src="item.url"/></van-swipe-item>
    </van-swipe>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            info: ''
        }
    },
    created() {
        axios.get('../../../static/json.json').then(res => {
            console.error(res);
            this.info = res && res.data && res.data.data;
            console.error(this.info);

        })
    },
    computed: {
        bannerList () {
            return this.info && this.info.bannerList
        }
    }
};
</script>

<style scoped>
.swipe{
    height: auto;
}
.swipe img{width: 100%;}
/* .swipe .van-swipe-item {
  color: #fff;
  text-align: center;
  background-color: #39a9ed;
} */
</style>
