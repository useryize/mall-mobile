<template>
    <div>
        <van-button type="primary" @click="btnTab">主要按钮</van-button>
        <van-popup v-model="isPop">内容</van-popup>
        <van-icon name="chat-o" />
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            isPop: false
        };
    },
    methods: {
        btnTab() {
            /* eslint-disable */
            console.error(this);
            this.isPop = true;
        }
    }
};
</script>
