<template>
  <div>
    CompositionSample
    <p>{{name}}</p>
    <p>{{age}}</p>
    <p>ref:{{nameRef}}</p>
    <p>reactive:{{book.titile}}</p>
    <p>reactive:{{book.author[0]}}</p>
    <p>reactiveToRefs:{{titleRef}}</p>
    <p>reactiveToRefs:{{authorRef[1]}}</p>
    <button @click="btnClick">click</button>
    <p>computed: {{totalPrice}}</p>
    <div>
      watch : 
      <input type="text" v-model="search">
    </div>
    <div>
      watchEffect : 
      <input type="text" v-model="searchEffect">
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, ref, toRefs, watch, watchEffect } from "vue";
export default {
  data(){},
  setup(){
    let name = 'user-name'
    const age = 20
    const nameRef = ref('ref-name')
    const book = reactive({
      title:'タイトル',
      author: ['大谷', '伊藤']
    })
    const bookToRefs = reactive({
      titleRef:'タイトルRef',
      authorRef: ['大谷Ref', '伊藤Ref']
    })
    const item = reactive({
      price: 100,
      number: 1
    })
    const totalPrice = computed(() => {
      return item.price * item.number
    })
    const btnClick = (e) => {
      console.log('click')
      console.log(book.title)
      console.log(e)
    }
    /**
     * Uncaught TypeError: Cannot read properties of null (reading 'playbackRate')
     * watch と watchEffect で上記のエラーが発生
     */
    const search = ref('')
    /** 値が変更されたら実行される */
    watch(search, (newValue, prevValue) => {
      console.log(`watch:${search.value}`)
      console.log(`new:${newValue}`)
      console.log(`prev:${prevValue}`)
    })
    const searchEffect = ref('')
    /** 値が変更したときと画面が読み込まれたときに実行される */
    watchEffect(() => {
      console.log(`watchEffect: ${searchEffect.value}`)
    })
    onMounted(() => {
      console.log('onMounted')
    })
    /** this -> undefined */
    console.log('setup')
    console.log(nameRef)
    console.log(nameRef.value)
    return {
      name,
      age,
      nameRef,
      book,
      ...toRefs(bookToRefs),
      btnClick,
      item,
      totalPrice,
      search,
      searchEffect
    }
  },
  created(){
    /** this -> vue instance */
    console.log('created')
  },
  mounted(){
    console.log('mounted')
  }
}
</script>

<style>

</style>