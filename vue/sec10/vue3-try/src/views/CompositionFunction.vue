<template>
  <div>CompositionFunction</div>
  <div>
    <p>商品名：{{item.name}}</p>
    <p>単価：{{item.price}}</p>
    <p>合計：{{totalPrice}}</p>
    <div>数量：{{item.amount}}</div>
    <div>
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import useCounter from "@/composables/useCounter";
export default {
  setup(){
    const item = reactive({
      name: 'item-name',
      price: 100,
      amount: 0
    })
    const {
      increment,
      decrement,
      totalPrice} = useCounter(item)
    return {
      item,
      increment,
      decrement,
      totalPrice
    }
  }
}
</script>

<style>

</style>