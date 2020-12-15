import Getweather from './getweather';
import Timeconvert from './timeconvert';
import Interface from './interface';

const Initialize = () => {
  Interface();

  const input = document.querySelector('#input');
  const form = document.querySelector('#form');
  const display = document.querySelector('.display');
  const error = document.querySelector('.errordisplay');
  const clearbtn = document.querySelector('#btn2');

  const Showerror = (msg) => {
    error.innerHTML = `${msg}`;
    error.classList.add('show');
  };

  const Showdata = (data) => {
    if (data.message === 'city not found') {
      Showerror('City doesnt exists.. Please enter valid city name.');
      setTimeout(() => {
        error.classList.remove('show');
      }, 2000);
    } else {
      display.innerHTML = `
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
  <h3 class="white-color">Feels like : ${Math.round(data.main.feels_like)}&deg; &#124;
  Air Pressure : ${data.main.pressure} millibars &#124;
  Humidity : ${data.main.humidity}%</h3>

  <h3 class="white-color"> Max Temperature : ${Math.round(data.main.temp_max)}&deg; &#124;
  Min Temperature : ${Math.round(data.main.temp_min)}&deg;
  </h3>

  <h3 class="white-color">Time of Sunrise : ${Timeconvert(data.sys.sunrise)} &#124;
  Time of Sunset : ${Timeconvert(data.sys.sunset)}</h3>

  <h3 class="white-color">Wind Speed : ${data.wind.speed} m/s &#124 Wind Degree : ${data.wind.deg}&deg;</h3>
  </div>
  `;
    }
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.value.toLowerCase();

    if (city === '') {
      Showerror('please enter a city name');
      setTimeout(() => {
        error.classList.remove('show');
      }, 2000);
    } else {
      Getweather(city).then((result) => {
        console.log(result);
        Showdata(result);
      }).catch((error) => {
        console.log(error);
        setTimeout(() => {
          error.classList.remove('show');
        }, 2000);
      });
    }
    input.value = '';
  });

  clearbtn.addEventListener('click', () => {
    display.innerHTML = '';
    console.log('working!!');
  });
};


export default Initialize;
