// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow';
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': '714c7bbd63msh97550227b3be672p13d0a2jsnad76cf4ae470',
//         'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//     }
// };

// // async function fetchData(){
// //     try {
// //         const response = await fetch(url, options);
// //         const result = JSON.parse(await response.text());
// //         console.log(result);
// //     } catch (error) {
// //         console.error(error);
// //     }
// // }

// // fetchData();

// fetch(url, options)
//     .then(response => response.json())
//     .then((response) => {

//         console.log(response)

//         cloud_pct.innerHTML = response.cloud_pct
//         temp2.innerHTML = response.temp
//         temp.innerHTML = response.temp
//         feels_like.innerHTML = response.feels_like
//         humidity.innerHTML = response.humidity
//         humidity2.innerHTML = response.humidity
//         min_temp.innerHTML = response.min_temp
//         max_temp.innerHTML = response.max_temp
//         wind_speed.innerHTML = response.wind_speed
//         wind_speed2.innerHTML = response.wind_speed
//         wind_degrees.innerHTML = response.wind_degrees
//         sunrise.innerHTML = response.sunrise
//         sunset.innerHTML = response.sunset

//     })
//     .catch(err => console.error(err));




// const url = ;

// let city = document.getElementById('city');
// console.log(city.value);

const apiKey = `e57ef12e6b3a58767f2bb1e492d05617`;

const weatherIcon = document.querySelector('.weatherIcon');

async function getWeather(city) {
    cityName.innerHTML = city;
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`);
    let data = await response.json();
    console.log(data)
    let lat = data[0].lat;
    let lon = data[0].lon;

    details(city, lat, lon);
    // console.log(lat)
}

let button = document.getElementById('submit');

button.addEventListener("click", (e)=>{
    e.preventDefault();
    getWeather(city.value);
});

getWeather('Delhi');


async function details(name, lat, lon){
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)

    let data = await res.json();

    temp.innerHTML = Math.round(data.main.temp);
    windSpeed.innerHTML = data.wind.speed;
    humidity.innerHTML = data.main.humidity;

    if(data.weather[0].description == "rain"){
        weatherIcon.src = "https://openweathermap.org/img/wn/10d@2x.png";
    }
    else if(data.weather[0].description == "clear sky"){
        weatherIcon.src = "https://openweathermap.org/img/wn/01d@2x.png"
    }
    else if(data.weather[0].description == "few clouds"){
        weatherIcon.src = "https://openweathermap.org/img/wn/02d@2x.png"
    }
    else if(data.weather[0].description == "scattered clouds"){
        weatherIcon.src = "https://openweathermap.org/img/wn/03d@2x.png"
    }
    else if(data.weather[0].description == "broken clouds"){
        weatherIcon.src = "https://openweathermap.org/img/wn/04d@2x.png"
    }
    else if(data.weather[0].description == "shower rain"){
        weatherIcon.src = "https://openweathermap.org/img/wn/09d@2x.png"
    }
    else if(data.weather[0].description == "thunderstorm"){
        weatherIcon.src = "https://openweathermap.org/img/wn/11d@2x.png"
    }
    else if(data.weather[0].description == "snow"){
        weatherIcon.src = "https://openweathermap.org/img/wn/13d@2x.png"
    }
    else if((data.weather[0].main == "Mist")|| (data.weather[0].main == "Smoke") || (data.weather[0].main == "Haze") || (data.weather[0].main == "Dust") || (data.weather[0].main == "Fog") || (data.weather[0].main == "Sand") || (data.weather[0].main == "Ash") || (data.weather[0].main == "Squall") || (data.weather[0].main == "Tornado")){
        weatherIcon.src = "https://openweathermap.org/img/wn/50d@2x.png"
    }



    console.log(temp);

    console.log(data);
}

//   getWeather();


