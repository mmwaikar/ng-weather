'use strict';

var WeatherCtrl = function ($scope, openWeather) {
  var _this = this;
  console.log("from class");
  console.log(this);

  _this.openWeather = openWeather;
  $scope.data = _this.data;
  //  $scope.weatherData = _this.weatherData;

  $scope.getWeather = function () {
    _this.getWeather();
  };

  $scope.showWeather = function (data) {
    _this.showWeather(data);
  };
};

WeatherCtrl.prototype.data = {
  delimiterSeparatedCities: "Pune,India",
  cities: [],

  weatherData: {
    series: ["Weather"],
    data: [{
        x: "Date",
        y: [10, 20, 30]
      }
    ]
  },

  chartConfig: {
    title: 'Weather',
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
};

WeatherCtrl.prototype.getWeather = function () {
  var cities = this.data.delimiterSeparatedCities.split(";");
  this.data.cities = cities;
  this.openWeather.getWeather(cities[0], this.showWeather);
};

WeatherCtrl.prototype.showWeather = function (data) {
  WeatherCtrl.prototype.data.weatherData = data;
};

//WeatherCtrl.$inject = ['$scope', 'openWeather'];
app.controller('WeatherCtrl', WeatherCtrl);
