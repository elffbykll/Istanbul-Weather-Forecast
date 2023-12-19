const url = 'https://api.openweathermap.org/data/2.5/'
const key = '0a02692e8980f3705feec2b6bb8f3927';


function setQuery(e) {
    if (e, keyCode == '13')
        getResult(search.value);
}

const getResult = (cityName) => {
    let query = '${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr'
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (result) => {
    console.log;
}

let search = document.getElementById('searcBar');
search.addEventListener('keypress',setQuery);