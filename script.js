var APIkey = "5b82c3b3d0b42dd0f5f3cf18e66273d8";
var queryURL =  "https://api.openweathermap.org/data/2.5/weather?" + APIkey;

$.ajax({
  url: queryURL,
  method: "GET"
})
.then(function(response) {
  console.log(queryURL);
  console.log(response);


var city = $()


$("#searchBtn").on("click", function(){
    $('#forecastH5').addClass('show');

    city = $("searchTerm").val();
    $("#searchTerm").val();

var d = new Date();
document.getElementById().innerHTML = d; 

var tempF = (response.main.temp - 273.15) * 1.80 + 32;
console.log(Math.floor(tempF))
console.log(response.main.humidity)
console.log(response.wind.speed)

var day = Number(results[i].dt_txt.split('-')[2].split(' ')[0]);
      var hour = results[i].dt_txt.split('-')[2].split(' ')[1];
      console.log(day);
      console.log(hour);
})
   

function makeList() {
    var listItem = $("<li>").addClass("list-group-item").text(city);
    $(".list").append(listItem);
}

function getCurrentConditions () {
    
    var tempF = (response.main.temp - 273.15) * 1.80 + 32;
    tempF = Math.floor(tempF);

    $('#currentCity').empty();
  
    var card = $("<div>").addClass("card");
    var cardBody = $("<div>").addClass("card-body");
    var city = $("<h4>").addClass("card-title").text(response.name);
    var cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
    var temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + tempF + " °F");
    var humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%");
    var wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + " MPH");
    var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")

    
    city.append(cityDate, image)
    cardBody.append(city, temperature, humidity, wind);
    card.append(cardBody);
    $("#currentCity").append(card)
   
  }
    
function getCurrentForecast() {

        ajax({
            url:"https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey, 
            method: "GET" 
        }).then(function (response){

            console.log(response)
            console.log(response.dt)
            $('#forecast').empty();

            var results = response.list;
            console.log(results)

        for (var i = 0; i < results.length; i++) {

      

      if(results[i].dt_txt.indexOf("12:00:00") !== -1){               
        
        var temp = (results[i].main.temp - 273.15) * 1.80 + 32;
        var tempF = Math.floor(temp);

        var card = $("<div>").addClass("card col-md2 ml-4 bg-primary text-white");
        var cardBody = $("<div>").addClass("card-body p-3 forecastBody")
        var cityDate = $("<h4>").addClass("card-title").text(date.toLocaleDateString('en-US'));
        var temperature = $("<p>").addClass("card-text forecastTemp").text("Temperature: " + tempF + " °F");
        var humidity = $("<p>").addClass("card-text forecastHumidity").text("Humidity: " + response.main.humidity + "%");
        var image = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png")

        cardBody.append(cityDate, image, temperature, humidity);
        card.append(cardBody);
        $("forecast").append(card);

      }
    }
});

}
}

    
 
    
