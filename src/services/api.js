import axios from "axios";
// const apiKey = '43090899ad06ac29f27ce1e1e9a3faf7';
const apiKey = 'ce29c84431d3a74b22e462545d661347';

export async function getWeatherData(location) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}`)
        .then(response => {
            console.log('resp', response);
            return response.data;
        })
        .catch(error => {
            location.status = 'Error fetching weather data';
            console.error(error);
        });
}
