<template>
  <div>
    <p>Book Detail</p>
    <p>title: {{books[bookIdx].title}}</p>
    <p>content: {{books[bookIdx].content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    content: String
  },
  data() {
    return {
      bookIdx: this.$route.params.id - 1,
      books:[
        {id: 1, title: 'title1', content: 'content1'},
        {id: 2, title: 'title2', content: 'content2'},
        {id: 3, title: 'title3', content: 'content3'}
      ]
    }
  },
  created() {
    if (this.$route.params.id > this.books.length) {
      this.$router.push('/book')
    }
  }
}
</script>

<style>

</style>