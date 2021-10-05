
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main0').innerHTML = main;
      document.getElementById('today-forecast-more-info0').innerHTML = description;
      document.getElementById('icon-weather-container0').innerHTML = icon;
      document.getElementById('today-forecast-temp0').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

// fonction recupération ville
function GetCity(){
 var city= document.getElementById('city-input').value;
 //alert(city);
 
 const apiWeathern = new API_WEATHER(city)
apiWeathern.fetchTodayForecast()
.then(function(response) {
  // Récupère la donnée d'une API
  const data = response.data; 
  //test

  // On récupère l'information principal
  const main = data.weather[0].main;
  const description = data.weather[0].description;
  const temp = data.main.temp;
  const icon = apiWeathern.getHTMLElementFromIcon(data.weather[0].icon);
  console.log(main);
  console.log(description);
  // Modifier le DOM
  document.getElementById('today-forecast-main0').innerHTML = main;
  document.getElementById('today-forecast-more-info0').innerHTML = description;
  document.getElementById('icon-weather-container0').innerHTML = icon;
  document.getElementById('today-forecast-temp0').innerHTML = `${temp}°C`;
  
})
.catch(function(error) {
  // Affiche une erreur
  console.error(error);
});
 
}

function GetMeteo3j(){
  const city= document.getElementById('city-input').value;
 
  
  const apiWeathern = new API_WEATHER(city)
  
  apiWeathern
  .meteoDay()
  .then(function(response) {
    const data = response.data;
    for (var i = 0; i < 4; i++) {
      
      
      
      // On récupère l'information principal
      const main = data.list[i].weather[0].main;
      
      const description = data.list[i].weather[0].description;
      
      const temp = data.list[i].temp.day;
      
      const icon = apiWeathern.getHTMLElementFromIcon(data.list[i].weather[0].icon);
      
      // Modifier le DOM
      document.getElementById('today-forecast-main'+i).innerHTML = main;
      document.getElementById('today-forecast-more-info'+i).innerHTML = description;
      document.getElementById('icon-weather-container'+i).innerHTML = icon;
      document.getElementById('today-forecast-temp'+i).innerHTML = `${temp}°C`;
    }

    
    
  })
  .catch(function(error) {
    // Affiche une erreur
    console.error(error);
  });

  
}
