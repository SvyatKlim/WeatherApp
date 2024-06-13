import axios from "axios";
// const apiKey = '43090899ad06ac29f27ce1e1e9a3faf7';
const apiKey = 'ce29c84431d3a74b22e462545d661347';

export function getWeatherData() {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}
