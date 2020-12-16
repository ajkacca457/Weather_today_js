const Getweather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=58e217dc39037b142756e2115c0d5722&units=metric`;
  const response = await fetch(url);
  const result = await response.json();
  return result;
};


export default Getweather;
