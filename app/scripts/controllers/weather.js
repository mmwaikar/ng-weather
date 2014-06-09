'use strict';

var WeatherCtrl = function ($scope, openWeather) {
  $scope.data = {
    isError: false,
    delimiterSeparatedCities: "",
    cities: [],
    weathers: [],
    errors: []
  };

  $scope.initModel = function () {
    $scope.data.isError = false;
    $scope.data.errors = [];
    $scope.data.weathers = [];
  };

  $scope.isModelValid = function () {
    return $scope.data.delimiterSeparatedCities.trim() !== "";
  };

  $scope.showWeather = function (data) {
    $scope.data.weathers.push(data);
  };

  $scope.showError = function (data) {
    $scope.data.isError = true;
    $scope.data.errors.push(data);
  };

  $scope.getWeather = function () {
    $scope.initModel();
    $scope.data.cities = $scope.data.delimiterSeparatedCities.split(";");

    _.each($scope.data.cities, function (city) {
      openWeather.getWeather(city.trim(), $scope.showWeather, $scope.showError);
    });
  };
};

app.controller('WeatherCtrl', WeatherCtrl);
