let btn = document.querySelector('button');
let input = document.querySelector('input');

btn.addEventListener('click', function(){
    let city = input.value;
    let api = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=9be6a0cdf7b231ec1af2119459850ad5';

fetch(api)
.then(response => response.json())
.then(data => {

    document.querySelector('.weather .value').textContent =data.weather[0].description;
    document.querySelector('.tempreature .value').textContent =data.main.temp;
    document.querySelector('.city .value').textContent =data.name;

    console.log(data.weather[0].description)
    console.log(data.main.temp);
    console.log(data.name)
})
.catch(error => {
    console.error(error);
    
})


})
