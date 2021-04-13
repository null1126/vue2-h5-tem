<template>
  <div class="index">
    <div>
      首页<span>测试</span>
    </div>

    <div class="btn"> 
      <van-button type="primary" size="mini">主要按钮</van-button>
    </div>

  </div>
</template>

<script>
import { Button } from 'vant';

export default {
  name: 'Home',
  components: {
    vanButton: Button
  }
}
</script>

<style lang="less" scoped>
.index{
  width: 375px;
  height: 80px;
  font-size: 12px;
  background: cornflowerblue;
}


.van-button{
  width: 100px;
  font-size: 16px;
}
</style>
