const API_KEY = "46ad7457603b9b0104e633e78cd60e16";
const searchBtn = () => {
  const cityName = document.getElementById("user-input").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};
const setInnertextAndId = (id, text) => {
  document.getElementById(id).innerText = text;
};
const displayTemperature = (temperature) => {
  setInnertextAndId("cityName", temperature.name);
  setInnertextAndId("temparature", temperature.main.temp);
  setInnertextAndId("condition", temperature.weather[0].main);
  //   set weather icon
  const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
  const image = document.getElementById("weather");
  image.setAttribute("src", url);
};
