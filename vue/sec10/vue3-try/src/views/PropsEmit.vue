<template>
  <div>PropsEmit</div>
  <div>{{setupBooks}}</div>
  <div>{{dataBooks}}</div>
  <ul>
    <li v-for="(book, idx) in setupBooks" :key="idx">
      {{book.title}}
    </li>
  </ul>
  <div>
    <button @click="emitTest">emit Test</button>
  </div>
</template>

<script>
export default {
  props: {
    setupBooks: Array,
    dataBooks: Array
  },
  setup(props, context){
    console.log(props.setupBooks)
    console.log(props.dataBooks)
    const emitTest = () =>{
      context.emit('custom-event', 'child-params')
    }
    return {
      emitTest
    }
  }
}
</script>

<style>

</style>