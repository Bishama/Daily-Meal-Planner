//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = 'https://www.themealdb.com//api/json/v1/1/random.php'
  document.querySelector('h2').innerText = ''

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.meals[0])
        document.querySelector('h2').innerText = data.meals[0].strMeal
        document.querySelector('h3').innerText = data.meals[0].strInstructions
        document.querySelector('img').src = data.meals[0].strMealThumb
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}