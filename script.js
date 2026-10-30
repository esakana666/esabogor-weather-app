// bogor-weather-app - portfolio S.Kom
// Using mock data first, can replace with real API later
const mockData = [
  { temp: 27, desc: "Berawan", hum: "80%", wind: "5 km/h" },
  { temp: 26, desc: "Hujan Ringan", hum: "85%", wind: "8 km/h" },
  { temp: 29, desc: "Cerah", hum: "70%", wind: "3 km/h" },
  { temp: 28, desc: "Mendung", hum: "78%", wind: "6 km/h" }
];

function renderWeather(data) {
  document.getElementById('temp').innerText = data.temp + '°C';
  document.getElementById('desc').innerText = data.desc + ' - Bogor, ID';
  document.getElementById('hum').innerText = data.hum;
  document.getElementById('wind').innerText = data.wind;
}

function refresh() {
  const data = mockData[Math.floor(Math.random() * mockData.length)];
  renderWeather(data);
}

// initial load
refresh();
document.getElementById('refreshBtn').addEventListener('click', refresh);

// TODO: Replace with real API
// async function getRealWeather() {
//   const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bogor,ID&appid=YOUR_API_KEY&units=metric`);
//   const data = await res.json();
//   renderWeather({ temp: Math.round(data.main.temp), desc: data.weather[0].description, hum: data.main.humidity + '%', wind: data.wind.speed + ' m/s' });
// }
