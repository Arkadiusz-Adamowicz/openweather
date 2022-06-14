const button = document.querySelector('#searchButton');
const input = document.querySelector('#searchText');
const output = document.querySelector('#output');
const name = document.querySelector('#name');
const desc = document.querySelector('#desc');
const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');

button.addEventListener("click", () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=6747fce384ac05724f4312453dd1dd48`)
  .then(response => response.json())
  .then(data => {
    const nameValue = data['name'];
    const descValue = data['weather'][0]['description'];
    const tempValue = data['main']['temp'];
    const windValue = data['wind']['speed'];

    name.innerHTML = nameValue;
    name.style.background = '#fff';
    name.style.color = 'var(--primary-color)';
    name.style.borderTopLeftRadius = '5px';
    name.style.borderTopRightRadius = '5px';
    desc.innerHTML = `description: ${descValue}`;
    desc.style.border = '1px solid #fff';
    desc.style.borderBottom = 'none';
    temp.innerHTML = `temp: ${tempValue}`;
    temp.style.border = '1px solid #fff';
    temp.style.borderBottom = 'none';
    wind.innerHTML = `wind speed: ${windValue}`;
    wind.style.border = '1px solid #fff';
    wind.style.borderBottomLeftRadius = '5px';
    wind.style.borderBottomRightRadius = '5px';

    console.log(data);
  })

  .catch(err => alert('Something went wrong...'));
});







