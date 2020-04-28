var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', (req, res) => {
  axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(response=>{
    var meal = response.data.meals[0];
    res.render('index', {meal, title:'Random Meal - ' + meal.strMeal});
  })
});


module.exports = router;