function displayHistory() {
    var historyarr = JSON.parse(localStorage.getItem('history')) || []
    document.querySelector('.recent-searches').replaceChildren()
    for (let i = 0; i < historyarr.length; i++) {
        var historyBtn = document.createElement('button')
        historyBtn.textContent = historyarr[i]
        document.querySelector('.recent-searches').appendChild(historyBtn)
    }
}

function displayWeather(city) {
    var currentweather = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=4ae990e508f0ee2b6ade16253195b8d2&units=imperial'
    fetch(currentweather)
        .then(data => data.json())
        .then(res => {
            console.log(res)
            var forecastweather = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + res.coord.lat + '&lon=' + res.coord.lon + '&appid=4ae990e508f0ee2b6ade16253195b8d2&units=imperial'

            fetch(forecastweather)

                .then(fore => fore.json())
                .then(result => {
                    console.log(result)

                    document.querySelector('#day0').textContent = "Date: " + result.list[5].dt_txt.split(' ')[0]
                    document.querySelector('#icon').src = "http://openweathermap.org/img/wn/" + result.list[5].weather[0].icon + ".png"
                    document.querySelector('#temperature').textContent = result.list[5].main.temp
                    document.querySelector('#humidity').textContent = result.list[5].main.humidity
                    document.querySelector('#wind').textContent = result.list[5].wind.speed
                    document.querySelector('#uv-index').textContent = result


                    document.querySelector('#day1').textContent = "Date: " + result.list[5].dt_txt.split(' ')[0]
                    document.querySelector('#day1icon').src = "http://openweathermap.org/img/wn/" + result.list[5].weather[0].icon + ".png"
                    document.querySelector('#day1temp').textContent = "Temperature: " + result.list[5].main.temp + " °F"
                    document.querySelector('#day1hum').textContent = "Humidity: " + result.list[5].main.humidity + " %"


                    document.querySelector('#day2').textContent = "Date: " + result.list[13].dt_txt.split(' ')[0]
                    document.querySelector('#day2icon').src = "http://openweathermap.org/img/wn/" + result.list[13].weather[0].icon + ".png"
                    document.querySelector('#day2temp').textContent = "Temperature: " + result.list[13].main.temp + " °F"
                    document.querySelector('#day2hum').textContent = "Humidity: " + result.list[13].main.humidity + " %"


                    document.querySelector('#day3').textContent = "Date: " + result.list[21].dt_txt.split(' ')[0]
                    document.querySelector('#day3icon').src = "http://openweathermap.org/img/wn/" + result.list[21].weather[0].icon + ".png"
                    document.querySelector('#day3temp').textContent = "Temperature: " + result.list[21].main.temp + " °F"
                    document.querySelector('#day3hum').textContent = "Humidity: " + result.list[21].main.humidity + " %"


                    document.querySelector('#day4').textContent = "Date: " + result.list[29].dt_txt.split(' ')[0]
                    document.querySelector('#day4icon').src = "http://openweathermap.org/img/wn/" + result.list[29].weather[0].icon + ".png"
                    document.querySelector('#day4temp').textContent = "Temperature: " + result.list[19].main.temp + " °F"
                    document.querySelector('#day4hum').textContent = "Humidity: " + result.list[19].main.humidity + " %"


                    document.querySelector('#day5').textContent = "Date: " + result.list[37].dt_txt.split(' ')[0]
                    document.querySelector('#day5icon').src = "http://openweathermap.org/img/wn/" + result.list[37].weather[0].icon + ".png"
                    document.querySelector('#day5temp').textContent = "Temperature: " + result.list[37].main.temp + " °F"
                    document.querySelector('#day5hum').textContent = "Humidity: " + result.list[37].main.humidity + " %"

                    console.log(result.list[5].dt_txt.split(' ')[0])
                })
        })
}

displayHistory()

document.querySelector('.recent-searches').addEventListener
    ('click', function (event) {
        if (event.target.matches('button')) {
        displayWeather(event.target.textContent)
        }
    })

var button = document.querySelector('#search')
button.addEventListener('click', function () {
    const apiKey = '4ae990e508f0ee2b6ade16253195b8d2';
    var city = document.querySelector('#citysearch').value
    var historyarr = JSON.parse(localStorage.getItem('history')) || []

    if (!historyarr.includes(city)) {
        historyarr.push(city)
        localStorage.setItem('history', JSON.stringify(historyarr))
        displayHistory()
    }

displayWeather(city)

})





