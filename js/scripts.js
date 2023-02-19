// Variáveis e seleção de elementos
const apiKey = "9c5b2cefde8dc62dcfabc013abade5b6";
const apiCountryURL = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")

// Funções

const showWeatherData = (city) => {
  console.log(city)
}

// Eventos

searchBtn.addEventListener("click", (e) => {
  e.preventDefault()

  const city = cityInput.value;

  console.log(city)
})
