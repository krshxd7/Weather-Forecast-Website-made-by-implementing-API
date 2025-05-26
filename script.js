const apiKey = '9c80eccdddc83fcb6bbc669a666a4087';

async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!res.ok) throw new Error('City not found');

    const data = await res.json();

    document.getElementById('weatherResult').innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>🌡 Temperature:</strong> ${data.main.temp}°C</p>
      <p><strong>☁ Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>🌬 Wind:</strong> ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p style="color: red;">${error.message}</p>`;
  }
}
