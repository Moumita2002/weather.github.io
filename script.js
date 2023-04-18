const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3a4bf8f4demshe6979a71ce56698p12c358jsna187ed10c440',
		'X-RapidAPI-Host': '	'
	}
};

Temp=document.getElementsByClassName("Temp");

const getWeather = (city) => {
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {

			console.log(response)


			cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp1.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity1.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed1.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}

const cityNameInfo=['Kolkata', 'Ranchi', 'Mumbai', 'Chennai', 'Delhi'];

const getcityWeatherinfo = (city) => {
	// Fetch weather data for the given city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
		// Update DOM elements with weather data
		const cityFeelsLike = document.getElementsByClassName("cityFeelsLike");
		const cityHumidity = document.getElementsByClassName("cityHumidity");
		const cityTemperature = document.getElementsByClassName("cityTemperature");
		const cityWindSpeed = document.getElementsByClassName("cityWindSpeed");

		// Find the index of the city in the cityNameInfo array
		const cityIndex = cityNameInfo.indexOf(city);

		// Update DOM elements with weather data for the corresponding city
		  cityFeelsLike[cityIndex].innerHTML = response.feels_like;
		  cityHumidity[cityIndex].innerHTML = response.humidity;
		  cityTemperature[cityIndex].innerHTML = response.temp;
		  cityWindSpeed[cityIndex].innerHTML = response.wind_speed;
		
	  })
	  .catch(err => console.error(err));
  }

  for (let i = 0; i < cityNameInfo.length; i++) {
	getcityWeatherinfo(cityNameInfo[i]);
  }

  const countryNameInfo=['London', 'USA', 'Paris', 'Tokyo', 'Singapore'];
  const getCountrytyWeatherinfo = (city) => {
	// Fetch weather data for the given city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
		// Update DOM elements with weather data
		const countryFeelsLike = document.getElementsByClassName("countryFeelsLike");
		const countryHumidity= document.getElementsByClassName("countryHumidity");
		const countryTemperature = document.getElementsByClassName("countryTemperature");
		const countryWindSpeed = document.getElementsByClassName("countryWindSpeed");

		// Find the index of the city in the cityNameInfo array
		const countryIndex = countryNameInfo.indexOf(city);

		// Update DOM elements with weather data for the corresponding city
		countryFeelsLike[countryIndex].innerHTML = response.feels_like;
		countryHumidity[countryIndex].innerHTML = response.humidity;
		countryTemperature[countryIndex].innerHTML = response.temp;
		countryWindSpeed[countryIndex].innerHTML = response.wind_speed;
		
	  })
	  .catch(err => console.error(err));
  }

  for (let i = 0; i < countryNameInfo.length; i++) {
	getCountrytyWeatherinfo(countryNameInfo[i]);
  }


submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
})






getWeather("Delhi")
















