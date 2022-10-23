<template>
    <div>
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="本のタイトルを検索"
            v-model="keyword">
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3">
          <v-btn color="primary"
          @click="search(keyword)">
            検索する
          </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn color="secondary" to="/">
            一覧へ戻る
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6"
                  v-for="(book, idx) in searchResults" :key="idx">
          <v-card class="mx-auto">
            <v-row>
              <v-col cols="4">
                <v-img :src="book.image"></v-img>
              </v-col>
              <v-col cols="8">
                <v-card-title>{{book.title}}</v-card-title>
                {{book.description}}
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-btn fab dark color="indigo"
                            @click="addBookList(idx)">
                    <v-icon dark>mdi-plus</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
</template>

<script>
export default {
  name: 'BookSearch',
  data(){
    return {
      keyword: '',
      searchResults: []
    }
  },
  methods: {
    addBookList(idx){
      this.$emit('add-book-list', this.searchResults[idx])
    },
    async search(keyword) {
      this.searchResults = []
      // create query string
      const baseUrl = 'https://www.googleapis.com/books/v1/volumes?'
      // const apiKey = 'AIzaSyBql6tXyjEQPTCef-8AzAzjIYT69d-xXWs'
      const params = {
        q: `intitle:${keyword}`,
        maxResults: 40
      }
      const queryParams = new URLSearchParams(params)
      console.log(baseUrl + queryParams)
      // get JSON by fetch
      const response = await fetch(baseUrl + queryParams)
      .then(response => response.json())
      console.log(response.items)
      // push item in array
      for (let book of response.items) {
        const bookInfo = book.volumeInfo
        let title = bookInfo.title
        let img = bookInfo.imageLinks
        let description = bookInfo.description
        this.searchResults.push({
          title: title ? title : '',
          image: img ? img.thumbnail : '',
          description: description ? description.slice(0, 40) : ''
        })
      }
    }
  }
}
</script>

<style>

</style>