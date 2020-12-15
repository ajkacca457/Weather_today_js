import Logo from './images/cloudy.png';

const Interface = () => {
  const container = document.createElement('div');
  container.classList.add('container');
  const errorcont = document.createElement('div');
  errorcont.classList.add('errordisplay');

  container.innerHTML = `
  <div class="header">
    <img src="${Logo}" alt="weather" id="logo">
    <h1>Weather Today</h1>
  </div>

  <form id="form">
  <input type="text" id="input" placeholder="Search your city weather">
  <button id="btn" class="btn" type="submit"> Search</button>
  </form>
  <button id="btn2"> clear</button>
  <div class="display"></div>
`;
  errorcont.innerHTML = '<p>Here all the errors will be shown</p>';

  document.body.appendChild(errorcont);
  document.body.appendChild(container);
};

export default Interface;
