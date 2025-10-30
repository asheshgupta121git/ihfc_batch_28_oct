let api = 'https://api.openweathermap.org/data/2.5/weather?q=pune&appid=9be6a0cdf7b231ec1af2119459850ad5';

fetch(api)
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data.weather[0].description)
    console.log(data.main.temp);
    console.log(data.name)
})
.catch(error => {
    console.error(error);
    
})



/*
{
    "coord": {
        "lon": 73.8553,
        "lat": 18.5196
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 298.93,
        "feels_like": 299.44,
        "temp_min": 298.93,
        "temp_max": 298.93,
        "pressure": 1009,
        "humidity": 72,
        "sea_level": 1009,
        "grnd_level": 936
    },
    "visibility": 10000,
    "wind": {
        "speed": 4.72,
        "deg": 234,
        "gust": 6.55
    },
    "clouds": {
        "all": 100
    },
    "dt": 1761807683,
    "sys": {
        "type": 2,
        "id": 2104163,
        "country": "IN",
        "sunrise": 1761786202,
        "sunset": 1761827576
    },
    "timezone": 19800,
    "id": 1259229,
    "name": "Pune",
    "cod": 200
}
*/