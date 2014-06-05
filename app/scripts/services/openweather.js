'use strict';

app.factory('openWeather', function ($http) {

  return {
    getWeather: function (city, callback) {
      $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?cnt=14', {
        params: {
          q: city,
          APPID: 'ce3d05d0909ed5c72c484d06ae442e99'
        }
      }).success(function (data) {
        callback(data);
      }).error(function (data) {
        console.log(JSON.stringify(data));
      });
    }
  };
});
