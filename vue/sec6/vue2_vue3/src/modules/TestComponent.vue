<template>
  <div class="b-red">
    <div class="b-blue">
      SCSSのテストです
    </div>
    <div class="background_primary">
      SCSSグローバルテスト
    </div>
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

<style scoped lang="scss">
  .b-red {
    border: 1px red solid;
  }
  .b {
    &-blue {
      border: 1px blue solid;
    }
  }
  .background_primary{
    background-color: $color-primary;
  }
</style>