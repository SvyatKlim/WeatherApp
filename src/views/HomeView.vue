<script setup>
import {getWeatherData} from "@/services/api.js";
import {geoFindMe} from "@/services/geolocationAPI.js";
import {ref, onMounted} from "vue";

const location = ref();

onMounted(async () => {
  location.value = await geoFindMe();
})

// const data = getWeatherData();
// const getLocation = async () => {
//  const location = await geoFindMe();
//   console.log(location)
// }

// let btnLocationStatus = location.status ? location.status : 'Get location'
// console.log(btnLocationStatus)
</script>

<template>
  <section class="container">
    {{ location}}
<!--    <button @click="getLocation">{{ btnLocationStatus}}</button>-->
    <div class="weather-main">
      <form class="weather-search" action="#">
        <input type="text" name="" id="">
      </form>
      <div class="weather-current-wrapper">
        <h1 class="weather-current__title"></h1>
        <div class="weather-current__tabs">
          <div class="weather-current__day">
            <h2 class="h1 weather-current__temperature"></h2>
            <h4 class="h1 weather-current__date"></h4>
          </div>
          <div class="weather-current__week">
              <div class="weather-current__card">
                <div class="weather-current__card__title"></div>
                <div class="weather-current__card__date"></div>
                <div class="weather-current__card__temperature"></div>
              </div>
          </div>
        </div>
      </div>
    </div>
    <aside class="weather-recently">
      <div class="card"></div>
    </aside>
  </section>
</template>
