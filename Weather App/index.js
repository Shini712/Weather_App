const apiKey = "d0ad5830777632b51c6ac9a45d13f85c";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weather = document.querySelector(".weather");
        
        async function checkWeather(place) {
            const response = await fetch(apiUrl + place + `&appid=${apiKey}`);
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".one").style.display = "none";
            }
            else{
                var data = await response.json();

                
                document.querySelector(".place"). innerHTML = data.name;
                document.querySelector(".temp"). innerHTML = Math.round(data.main.temp) + "°c";
                document.querySelector(".humidity"). innerHTML = data.main.humidity + "%";
                document.querySelector(".wind"). innerHTML = data.wind.speed + "Kmph";
                
                if(data.weather[0].main == "Clouds"){
                    weather.src = "image/cloud.png";
                }
                else if(data.weather[0].main == "Clear"){
                    weather.src = "image/clear.png";
                }
                else if(data.weather[0].main == "Rain"){
                    weather.src = "image/rain.webp";
                }
                else if(data.weather[0].main == "Drizzle"){
                    weather.src = "image/weather.png";
                }
                else if(data.weather[0].main == "Mist"){
                    weather.src = "image/mist.png";
                }
                document.querySelector(".one").style.display = "block";
                document.querySelector(".error").style.display = "none";
            }
        }
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value);
        })