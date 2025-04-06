// http://api.weatherapi.com/v1/current.json?key=0940753b65a84337862230150250504&q=Hyderabad&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".city");
const dateField = document.querySelector(".time");
const logoField = document.querySelector(".logo");
const logoTextField = document.querySelector(".logoText");
const searchField = document.querySelector(".search_area");
const buttonField = document.querySelector("button");
const img = document.createElement("img");
const dayField = document.querySelector(".day");

buttonField.addEventListener("click", searchForLocation);

let city = "Kansas City";
const fetchResults = async (target) => {
  let url = `http://api.weatherapi.com/v1/current.json?key=0940753b65a84337862230150250504&q=${target}&aqi=no`;

  const res = await fetch(url);

  const data = await res.json();

  console.log(data);

  let temperature = data.current.temp_c;
  let locationName = data.location.name;
  let time = data.location.localtime;
  const day = new Date(time);
  const dayName = day.toLocaleDateString("en-US", { weekday: "long" });
  img.src = "https:" + data.current.condition.icon;
  let tempStyle = data.current.condition.text;
  updateDetails(temperature, locationName, dayName, time, tempStyle);
};

function updateDetails(temperature, locationName, dayName, time, tempStyle) {
  temperatureField.innerText = temperature;
  locationField.innerText = locationName;
  dayField.innerText = dayName;
  dateField.innerText = time;
  logoField.appendChild(img);
  logoTextField.innerText = tempStyle;
}

function searchForLocation(e) {
  e.preventDefault();

  city = searchField.value;
  fetchResults(city);
}

fetchResults(city);
