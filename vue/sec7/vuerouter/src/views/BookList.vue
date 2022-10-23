<template>
  <div>
    <h1>bookList</h1>
    <ul>
      <li v-for="book in books" :key="book.id"
          @click="showBookDetail(book.id)">
        {{ book.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  data(){
    return {
      bookIdx: -1,
      books: [
        {id: 1, title: 'title1', content: 'content1'},
        {id: 2, title: 'title2', content: 'content2'},
        {id: 3, title: 'title3', content: 'content3'}
      ]
    }
  },
  methods: {
    showBookDetail(id) {
      this.bookIdx = id - 1
      console.log(this.bookIdx)
      this.$router.push({
        name: 'BookDetail',
        params: {
          id: this.books[this.bookIdx].id,
          title: this.books[this.bookIdx].title
        }
      })
    }
  }
}
</script>

<style lang="scss">

</style>