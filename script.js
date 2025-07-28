 let apiKey = "c429dd2564536bd339504b5587e157ac"; // Use only one correct key

    function getWeather() {
      let city = document.getElementById("cityInput").value.trim();
      if (!city) {
        document.getElementById("weatherResult").innerHTML = `<p>❌ Please enter a city name</p>`;
        return;
      }

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      fetch(url)
        .then(response => {
          if (!response.ok) throw new Error("City not found or Invalid API key");
          return response.json();
        })
        .then(data => {
          let resultDiv = document.getElementById("weatherResult");
          let temp = data.main.temp;
          let weather = data.weather[0].main;
          let description = data.weather[0].description;

          resultDiv.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡️ Temperature: ${temp}°C</p>
            <p>🌥️ Weather: ${weather} - ${description}</p>
          `;
        })
        .catch(error => {
          document.getElementById("weatherResult").innerHTML = `<p>❌ ${error.message}</p>`;
        });
    }