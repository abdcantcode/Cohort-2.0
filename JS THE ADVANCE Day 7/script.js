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

// function getWeather(city) {
//     let apikey = 'd6d96dd96d736553e1660d99053e99b2';
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`)
//       .then(function (rawdata) {
//         return rawdata.json();
//       })
//       .then(function (data) {
//         console.log(data.main.temp);
//         alert(data.main.temp+"°C");
//       })
// }
// getWeather("Hyderabad");

async function weatherphek(city){
  try{
    let apikey = '2772fb0b5e2f3c047a6c8414a62696e9';
    let rawdata=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`);
    if(!rawdata.ok){
      throw new Error("Something is wrong maybe the city is wrong"); //Yeh jaata catch block mein
    }
    let realdata=await rawdata.json(); //uppar ke await ke liye iney toh wait karna ich hai na obviously
    console.log(realdata.main.temp+"C");
    if(realdata.main.temp<0){
      console.warn("Bhai thanda hai baher nakko nikal");
    }
    else if (realdata.main.temp>40){
      console.warn("Bhai garmi mein pagal hojata re haule");
    }
    else{
      console.log("Baher mausam bhi suhana hai mama chalo");
    }
  }
  catch(err){
    console.log(err.message);
  }
}
weatherphek("Hyderabad");
