var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/', (req, res) => {
  axios.get('https://www.themealdb.com/api/json/v1/1/random.php').then(response => {

    let meal = response.data.meals[0];

    youtubeConverter = (link) => {
      let x = link.split("=");
      let youtube = "https://www.youtube.com/embed/" + x[1];
      return youtube;
    };

    let youtube = youtubeConverter(meal.strYoutube);

    let ingredients = [meal.strIngredient1, meal.strIngredient2, meal.strIngredient3, meal.strIngredient4,
      meal.strIngredient5, meal.strIngredient6, meal.strIngredient7, meal.strIngredient8, meal.strIngredient9,
      meal.strIngredient10, meal.strIngredient11, meal.strIngredient12, meal.strIngredient13, meal.strIngredient14,
      meal.strIngredient15, meal.strIngredient16, meal.strIngredient17, meal.strIngredient18, meal.strIngredient19,
      meal.strIngredient20
    ];

    res.render('index', {
      meal,
      title: 'Random Meal - ' + meal.strMeal,
      youtube,
      ingredients
    });

  })
});




module.exports = router;