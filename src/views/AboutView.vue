<template>
  <div class="about">
    <h1>
      <a href="http://localhost:8082/">进入CCB子模块</a>
      <br>
      <input v-model="message"
             type="button"
             @click="comeToMod" />
    </h1>
  </div>
</template>
<script>
export default {
  name: 'AboutView',
  data () {
    return {
      message: '进入MOD子模块'
    }
  },
  methods: {
    comeToMod () {
      window.location.href = 'http://localhost:8082/'
    }
  }
}
</script>

