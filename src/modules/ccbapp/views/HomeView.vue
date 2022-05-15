<template>
  <div class="home">
    <img alt="Vue logo"
         src="@ccbassets/logo.png">
    <HelloWorld msg="这是CCB 子模块" />
  </div>
</template>

<script>
// @ is an alias to /src
// 应用公共组件
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
