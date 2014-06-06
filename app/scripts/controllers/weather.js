'use strict';

var WeatherCtrl = function ($scope, openWeather) {
  var _this = this;
  console.log("from class");
  console.log(this);

  $scope.data = {
    delimiterSeparatedCities: "Pune,India; London,UK",
    cities: [],
    weathers: []
  };

  $scope.showWeather = function (data) {
    $scope.data.weathers.push(data);
  };

  $scope.getWeather = function () {
    $scope.data.weathers = [];
    $scope.data.cities = $scope.data.delimiterSeparatedCities.split(";");
    _.each($scope.data.cities, function (city) {
      openWeather.getWeather(city.trim(), $scope.showWeather);
    });
  };
};

//WeatherCtrl.$inject = ['$scope', 'openWeather'];
app.controller('WeatherCtrl', WeatherCtrl);
