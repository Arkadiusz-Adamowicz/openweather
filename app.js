const button = document.querySelector('#searchButton');
const input = document.querySelector('#searchText');
const output = document.querySelector('#output');
const name = document.querySelector('#name');
const desc = document.querySelector('#desc');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const pressure = document.querySelector('#pressure');

button.addEventListener("click", () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=6747fce384ac05724f4312453dd1dd48`)
  .then(response => response.json())
  .then(data => {
    const nameValue = data['name'];
    const descValue = data['weather'][0]['description'];
    const tempValue = data['main']['temp'];
    const windValue = data['wind']['speed'];
    const pressureValue = data['main']['pressure'];

    name.innerHTML = nameValue;
    desc.innerHTML = `description: ${descValue}`;
    desc.classList.add('border_bottom');
    temp.innerHTML = `temp: ${tempValue} K`;
    temp.classList.add('border_bottom');
    wind.innerHTML = `wind speed: ${windValue}`;
    wind.classList.add('border_bottom');
    pressure.innerHTML = `pressure: ${pressureValue} hPa`;
    pressure.classList.add('border_bottom');

    input.value = '';
  })
  .catch(err => alert('Something went wrong'));
});







