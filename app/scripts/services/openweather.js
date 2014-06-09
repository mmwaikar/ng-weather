'use strict';

app.factory('openWeather', function ($http) {

  var getWeather = function (city, callback, errorCallback) {
    $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?cnt=14', {
      params: {
        q: city,
        APPID: 'ce3d05d0909ed5c72c484d06ae442e99'
      }
    }).success(function (data) {
      if (data.cod === "404") {
        errorCallback("Could not find data for city " + city + ". Please check the spelling of the city you are trying to search.");
      } else {
        callback(data);
      }
    }).error(function (data) {
      console.log(JSON.stringify(data));
      errorCallback(data);
    });
  };

  // Public API
  return {
    getWeather: getWeather
  };
});
