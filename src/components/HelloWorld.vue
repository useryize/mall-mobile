<template>
  <div>
      <van-button type="primary">{{msg}}</van-button>
  </div>
  
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

