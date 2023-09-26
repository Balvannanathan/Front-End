let search = document.getElementById('search')
let geo=document.getElementById('location')
let input=document.getElementById('input')


search.addEventListener('click',()=>{
    weatherfetch(input.value)
})

function weatherfetch(input){
    console.log(input)
    const API_ID='a9800ec86bd293beb7343e6fafb7617d'
    let API_URL=`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${input}&appid=${API_ID}`
    fetch(API_URL).then(res=>res.json().then(data=>{
        console.log(data)
        document.getElementById('deg').innerHTML=`${parseInt(data.main.temp)}°C`
        document.querySelector('.l1').innerHTML=data.weather[0].main
        document.getElementById('speed').innerHTML=`${parseInt(data.wind.speed)} km/h`
        document.getElementById('level').innerHTML=`${data.main.humidity}%`
        document.querySelector('.l2').innerHTML=`<i class="fa-solid fa-location-dot"></i>${data.name},${data.sys.country}`
        let icon=data.weather[0].main;
        switch(icon){
            case 'Rain':
                document.querySelector('.wi').innerHTML='<i class="fa-solid fa-cloud-showers-heavy"></i>'
                break
            case 'Thunderstrom':
                document.querySelector('.wi').innerHTML='<i class="fa-solid fa-cloud-bolt"></i>'
                break
            case 'Clouds':
                document.querySelector('.wi').innerHTML='<i class="fa-solid fa-cloud">'
                break
            case 'Mist':
                document.querySelector('.wi').innerHTML='<i class="fa-solid fa-wind"></i>'
                break
            case 'Clear':
                document.querySelector('.wi').innerHTML='<i class="fa-solid fa-cloud-sun"></i>'
                break
            case 'defalut':
                document.querySelector('.wi').innerHTML='<i class="fa-solid fa-cloud-sun"></i>'
                break   
        }
    }))
}

geo.addEventListener('click',()=>{
    console.log('location detected')
    navigator.geolocation.getCurrentPosition(position=>{
        const{ latitude, longitude } = position.coords
        const url=`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        fetch(url).then(res=>res.json().then(data=>{
            weatherfetch(data.address.city)
        }))
   })
})