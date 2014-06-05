'use strict';

//app.controller('WeatherCtrl', function ($scope) {
//  $scope.delimiterSeparatedCities = "";
//});

var WeatherCtrl = function ($scope, openWeather) {
  var _this = this;
  console.log("from class");
  console.log(this);

  _this.openWeather = openWeather;
  $scope.delimiterSeparatedCities = _this.delimiterSeparatedCities;
  $scope.chartConfig = _this.chartConfig;
  $scope.weatherData = _this.weatherData;

  $scope.getCities = function () {
    _this.getCities();
  };

  $scope.getWeather = function () {
    _this.getWeather();
  };

  $scope.showWeather = function (data) {
    _this.showWeather(data);
  };
};

WeatherCtrl.prototype.delimiterSeparatedCities = "Pune,India";

WeatherCtrl.prototype.chartConfig = {
  title: '',
  tooltips: true,
  labels: false,
  mouseover: function () {},
  mouseout: function () {},
  click: function () {},
  legend: {
    display: true,
    //could be 'left, right'
    position: 'left'
  },
  //  innerRadius: 0 // applicable on pieCharts, can be a percentage like '50%'
  lineLegend: 'lineEnd' // can be also 'traditional'
}

WeatherCtrl.prototype.getCities = function () {
  console.log("from prototype");
  console.log(this);
  return this.delimiterSeparatedCities.split(";");
};

WeatherCtrl.prototype.getWeather = function () {
  var cities = this.getCities();
  this.openWeather.getWeather(cities[0], this.showWeather);
};

WeatherCtrl.prototype.showWeather = function (data) {
  WeatherCtrl.prototype.weatherData = data;
};

//WeatherCtrl.$inject = ['$scope', 'openWeather'];
app.controller('WeatherCtrl', WeatherCtrl);
