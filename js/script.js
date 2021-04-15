
new Vue({
    el: '#app',
    data: {
      results:[],
      restaurantList:[],
      userSearch:''
    },
    methods:{
      search() {
        this.results = [];
        this.searchRestaurant();
      },
      searchRestaurant() {
        const self = this;
        axios
          .get('https://api.themoviedb.org/3/search/movie?api_key=0071f8ee5cbfa7dc991e243699c56675&query=' + self.userSearch)
          .then(function(result) {
            const restaurantList = result.data.results;
  
            self.restaurantList = restaurantList;
            self.results = [...self.restaurantList,...self.results]
            self.userSearch = '';
  
          });
      }
    },
  
  })
  Vue.config.devtools = true
