<template>
  <div class="b-red">
    テストです
    {{ testData }}
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  data(){
    return {
      testData: 'テストdataです'
    }
  }
}
</script>

<style scoped>
  .b-red {
    border: 1px red solid;
  }
</style>