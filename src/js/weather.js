const nowWeather = body.querySelector("#weather_title")
const nowWeatherbox = body.querySelector("#weather_box")

console.log(nowWeatherbox)

function showWeather(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // 날씨 정보를 가져오는 함수 호출
    getWeather(latitude, longitude);
}

function getWeather(latitude, longitude) {
    var apiKey = "9ad39f5c119e381c8ca7bc89f7db2c52";
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // console.log(data)
        var name = data.name
        var weather = data.weather[0].main;
        var temperature = data.main.temp;
  
        nowWeather.innerText = `${weather} ${temperature}℃`;
      })
      .catch(function (error) {
        console.log("Error:", error);
      });
  }

navigator.geolocation.getCurrentPosition(showWeather);
