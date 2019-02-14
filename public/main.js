// let currentJoke = {}
const getWeather = () => {
  // send the request
  fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=tampa&appid=15174363504cfc356b52cf95eb141093&units=imperial'
  )
    //`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=15174363504cfc356b52cf95eb141093&units=imperial`
    // getting the response back
    .then(resp => {
      return resp.json()
    })
    .then(joke => {
      console.log(joke)
      console.log('Humidity: ' + joke.main.temp_max)
    })
}
document.querySelector('.search').addEventListener('click', getWeather)
