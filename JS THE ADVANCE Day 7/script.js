/* # Day 63 — Project Scenarios

API example (OpenWeatherMap):

`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`

---

## Scenario 1 — Weather Dashboard with Error Handling

Build a small weather dashboard that fetches current weather data from a public weather API (e.g., OpenWeatherMap).

### Requirements

- Make the API request asynchronously using `fetch` with `async/await`.
- Handle API request failures (for example, invalid city name) using `try/catch`.
- Create and throw custom errors based on weather conditions (e.g., extremely high or low temperature) and handle them appropriately.

### Suggested tasks

- Build a simple UI to input a city name and display the result.
- Show user-friendly error messages for network errors, invalid input, or API errors.
- Demonstrate at least one custom thrown error (e.g., `ExtremeTemperatureError`) and handle it in the UI. */

function getWeather(city) {
    let apikey = 'd6d96dd96d736553e1660d99053e99b2';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
      .then(function (rawdata) {
        return rawdata.json();
      })
      .then(function (data) {
        console.log(data);
      })
}
getWeather("Hyderabad");