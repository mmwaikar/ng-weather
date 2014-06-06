'use strict';

var WeatherCtrl = function ($scope, openWeather) {
  var _this = this;
  console.log("from class");
  console.log(this);

  $scope.data = {
    delimiterSeparatedCities: "",
    cities: [],
    weathers: [],
    isError: false,
    errors: []
  };

  $scope.isModelValid = function () {
    return $scope.data.delimiterSeparatedCities.trim() !== "";
  };

  $scope.showWeather = function (data) {
    $scope.data.weathers.push(data);
  };

  $scope.showError = function (data) {
    $scope.data.isError = true;
    if (data.cod === "404") {
      $scope.data.errors.push("Could not find data.");
    } else {
      $scope.data.errors.push(data);
    }
  };

  $scope.getWeather = function () {
    $scope.data.isError = false;
    $scope.data.errors = [];
    $scope.data.weathers = [];
    $scope.data.cities = $scope.data.delimiterSeparatedCities.split(";");

    _.each($scope.data.cities, function (city) {
      openWeather.getWeather(city.trim(), $scope.showWeather, $scope.showError);
    });
  };
};

app.controller('WeatherCtrl', WeatherCtrl);
