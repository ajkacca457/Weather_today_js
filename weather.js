const interface=()=>{

const container= document.createElement("div");
container.classList.add("container");
const errorcont=document.createElement("div");
errorcont.classList.add("errordisplay");

container.innerHTML=`

  <div class="header">
    <img src="cloudy.png" alt="weather" id="logo">
    <h1>Weather Today</h1>
  </div>

  <form id="form">
  <input type="text" id="input" placeholder="Search your city weather">
  <button id="btn" class="btn" type="submit"> Search</button>
  </form>
  <button id="btn2"> clear</button>
  <div class="display"></div>
  <img src="loading.gif" alt="wait" id="load">
`
errorcont.innerHTML=`<p>Here all the errors will be shown</p>`

document.body.appendChild(errorcont);
document.body.appendChild(container);

}

interface();


const input =document.querySelector("#input");
const form=document.querySelector("#form");
const display= document.querySelector(".display");
const error=document.querySelector(".errordisplay");
const clearbtn=document.querySelector("#btn2");
const loader=document.querySelector("#load");

console.log(loader);

form.addEventListener("submit",(e)=>{
  e.preventDefault();
const city=input.value.toLowerCase();

if(city===""){
  showerror("please enter a city name");
  setTimeout(()=>{
    error.classList.remove("show");
  }, 2000);
}
else {
  getweather(city).then((result)=>{
    console.log(result);
    showdata(result);
  }).catch((error)=>{
    showerror(error);
    setTimeout(()=>{
      error.classList.remove("show");
    }, 2000);
  });
}
input.value="";
})


clearbtn.addEventListener("click",()=>{
  display.innerHTML= "";
  console.log("working!!")
})





const getweather= async (city)=>{

const url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=58e217dc39037b142756e2115c0d5722&units=metric`;
const response= await fetch(url);
const result= await response.json();
return result;
}

const showdata= (data)=>{

if(data.message==="city not found"){
  showerror("City doesnt exists.. Please enter valid city name.");
  setTimeout(()=>{
    error.classList.remove("show");
  }, 2000);
}
else {
showloader();
setTimeout(()=>{
  loader.classList.remove("load");
  display.classList.remove("load");
}, 1000);

display.innerHTML= `
<hr>
<div class="top">
<div class="country">
<h2 class="white-color">${data.name}</h2>
<img src="https://www.countryflags.io/${data.sys.country}/shiny/64.png" id="flag">
<h2 class="white-color" id="cname">${data.sys.country}</h2>
</div>

<div class="temperature">
<h3 class="white-color">Today's Temperature</h3>
<h1 class="white-color" id="temp">${Math.round(data.main.temp)}&deg;</h1>
</div>
</div>

<div class="middle">
<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
<h3 class="white-color">${data.weather[0].description}</h3>
</div>


<div class="other">

<div class="btncont">
<button id="cel">C</button>
<button id="fer">F</button>
</div>

<h3 class="white-color">Feels like : <span id="feel">${Math.round(data.main.feels_like)}</span>&deg; &#124;
Air Pressure : ${data.main.pressure} millibars &#124;
Humidity : ${data.main.humidity}%</h3>

<h3 class="white-color"> Max Temperature : <span id="maxtemp">${Math.round(data.main.temp_max)}</span>&deg; &#124;
Min Temperature : <span id="mintemp">${Math.round(data.main.temp_min)}</span>&deg;
</h3>

<h3 class="white-color">Time of Sunrise : ${timeconvert(data.sys.sunrise)} &#124;
Time of Sunset : ${timeconvert(data.sys.sunset)}</h3>

<h3 class="white-color">Wind Speed : ${data.wind.speed} m/s &#124 Wind Degree : ${data.wind.deg}&deg;</h3>
</div>
`

const cel=document.querySelector("#cel");
const fer=document.querySelector("#fer");

const temp=document.querySelector("#temp");
const mintemp=document.querySelector("#mintemp");
const mtemp=document.querySelector("#maxtemp");
const feel=document.querySelector("#feel");

cel.addEventListener("click",()=>{
  cel.classList.add("active");
  fer.classList.remove("active");
  temp.innerHTML=`${Math.round(data.main.temp)}&deg`;
  mintemp.innerHTML=`${Math.round(data.main.temp_min)}`;
  maxtemp.innerHTML=`${Math.round(data.main.temp_max)}`;
  feel.innerHTML=`${Math.round(data.main.feels_like)}`;
})

fer.addEventListener("click",()=>{
  fer.classList.add("active");
  cel.classList.remove("active");
  temp.innerHTML=`${converttemp(data.main.temp)}&deg`;
  mintemp.innerHTML=`${converttemp(data.main.temp_min)}`;
  maxtemp.innerHTML=`${converttemp(data.main.temp_max)}`;
  feel.innerHTML=`${converttemp(data.main.feels_like)}`;
})
}
}


const converttemp=(input)=>{
const fahrenheit= Math.round((9 / 5) * input+ 32);
return fahrenheit;
}


const timeconvert= (time)=>{
const date= new Date(time*1000)
let hour= date.getHours();
let min= date.getMinutes();
min = min < 10 ? "0" + min : min;
const ntime=`${hour}: ${min}`
return ntime;
}

const showerror=(msg)=>{
error.innerHTML=`${msg}`
error.classList.add("show");
}

const showloader=()=>{
loader.classList.add("load");
display.classList.add("load");
}
