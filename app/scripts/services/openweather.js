'use strict';

app.factory('openWeather', function ($http) {

  //  var getWeather = function (city, callback) {
  //    $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?cnt=14', {
  //      params: {
  //        q: city,
  //        APPID: 'ce3d05d0909ed5c72c484d06ae442e99'
  //      }
  //    }).success(function (data) {
  //      callback(data);
  //    }).error(function (data) {
  //      console.log(JSON.stringify(data));
  //    });
  //  };

  var getWeather = function (city, callback) {
    var data = {
      "cod": "200",
      "message": 5.2384,
      "city": {
        "id": 1259229,
        "name": "Pune",
        "coord": {
          "lon": 73.855347,
          "lat": 18.519569
        },
        "country": "IN",
        "population": 0,
        "sys": {
          "population": 0
        }
      },
      "cnt": 14,
      "list": [
        {
          "dt": 1402038000,
          "temp": {
            "day": 306.06,
            "min": 298.25,
            "max": 307.9,
            "night": 298.25,
            "eve": 306.17,
            "morn": 298.31
          },
          "pressure": 947.8,
          "humidity": 55,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "sky is clear",
              "icon": "01d"
                }
            ],
          "speed": 4.02,
          "deg": 283,
          "clouds": 0
        },
        {
          "dt": 1402124400,
          "temp": {
            "day": 307.21,
            "min": 296,
            "max": 309.1,
            "night": 299.55,
            "eve": 307.71,
            "morn": 296
          },
          "pressure": 946.56,
          "humidity": 49,
          "weather": [
            {
              "id": 502,
              "main": "Rain",
              "description": "heavy intensity rain",
              "icon": "10d"
                }
            ],
          "speed": 3.86,
          "deg": 288,
          "clouds": 12,
          "rain": 20
        },
        {
          "dt": 1402210800,
          "temp": {
            "day": 307.48,
            "min": 296.25,
            "max": 309.36,
            "night": 299.72,
            "eve": 308.1,
            "morn": 296.25
          },
          "pressure": 944.49,
          "humidity": 46,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "sky is clear",
              "icon": "02d"
                }
            ],
          "speed": 4.42,
          "deg": 291,
          "clouds": 8
        },
        {
          "dt": 1402297200,
          "temp": {
            "day": 301.58,
            "min": 299.51,
            "max": 301.58,
            "night": 300.01,
            "eve": 301.31,
            "morn": 299.51
          },
          "pressure": 997.73,
          "humidity": 0,
          "weather": [
            {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10d"
                }
            ],
          "speed": 3.66,
          "deg": 199,
          "clouds": 13,
          "rain": 5.57
        },
        {
          "dt": 1402383600,
          "temp": {
            "day": 301.88,
            "min": 299.82,
            "max": 302.37,
            "night": 300.82,
            "eve": 302.37,
            "morn": 299.82
          },
          "pressure": 997.8,
          "humidity": 0,
          "weather": [
            {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10d"
                }
            ],
          "speed": 5.95,
          "deg": 189,
          "clouds": 19,
          "rain": 3.8
        },
        {
          "dt": 1402470000,
          "temp": {
            "day": 302.37,
            "min": 300.22,
            "max": 302.37,
            "night": 300.22,
            "eve": 302.14,
            "morn": 300.41
          },
          "pressure": 997.52,
          "humidity": 0,
          "weather": [
            {
              "id": 502,
              "main": "Rain",
              "description": "heavy intensity rain",
              "icon": "10d"
                }
            ],
          "speed": 8.22,
          "deg": 183,
          "clouds": 39,
          "rain": 12.85
        },
        {
          "dt": 1402556400,
          "temp": {
            "day": 300.38,
            "min": 299.14,
            "max": 300.66,
            "night": 300.47,
            "eve": 300.66,
            "morn": 299.14
          },
          "pressure": 993.82,
          "humidity": 0,
          "weather": [
            {
              "id": 502,
              "main": "Rain",
              "description": "heavy intensity rain",
              "icon": "10d"
                }
            ],
          "speed": 11.4,
          "deg": 181,
          "clouds": 21,
          "rain": 38.49
        },
        {
          "dt": 1402642800,
          "temp": {
            "day": 301.61,
            "min": 300.47,
            "max": 301.61,
            "night": 300.87,
            "eve": 300.99,
            "morn": 300.47
          },
          "pressure": 989.14,
          "humidity": 0,
          "weather": [
            {
              "id": 502,
              "main": "Rain",
              "description": "heavy intensity rain",
              "icon": "10d"
                }
            ],
          "speed": 18.03,
          "deg": 177,
          "clouds": 76,
          "rain": 27.13
        },
        {
          "dt": 1402729200,
          "temp": {
            "day": 300.92,
            "min": 300.91,
            "max": 301.37,
            "night": 300.91,
            "eve": 301.03,
            "morn": 301.37
          },
          "pressure": 992.5,
          "humidity": 0,
          "weather": [
            {
              "id": 502,
              "main": "Rain",
              "description": "heavy intensity rain",
              "icon": "10d"
                }
            ],
          "speed": 11.74,
          "deg": 213,
          "clouds": 39,
          "rain": 42.68
        },
        {
          "dt": 1402815600,
          "temp": {
            "day": 302.59,
            "min": 300.79,
            "max": 302.59,
            "night": 300.81,
            "eve": 302.34,
            "morn": 300.79
          },
          "pressure": 994.98,
          "humidity": 0,
          "weather": [
            {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10d"
                }
            ],
          "speed": 9.05,
          "deg": 211,
          "clouds": 35,
          "rain": 8.08
        },
        {
          "dt": 1402902000,
          "temp": {
            "day": 301.88,
            "min": 300.42,
            "max": 301.88,
            "night": 300.67,
            "eve": 301.67,
            "morn": 300.42
          },
          "pressure": 995.6,
          "humidity": 0,
          "weather": [
            {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10d"
                }
            ],
          "speed": 8.06,
          "deg": 215,
          "clouds": 33,
          "rain": 7.75
        },
        {
          "dt": 1402988400,
          "temp": {
            "day": 302.65,
            "min": 300.51,
            "max": 302.67,
            "night": 301.27,
            "eve": 302.67,
            "morn": 300.51
          },
          "pressure": 995.42,
          "humidity": 0,
          "weather": [
            {
              "id": 501,
              "main": "Rain",
              "description": "moderate rain",
              "icon": "10d"
                }
            ],
          "speed": 7,
          "deg": 236,
          "clouds": 40,
          "rain": 6.6
        },
        {
          "dt": 1403074800,
          "temp": {
            "day": 303.8,
            "min": 300.98,
            "max": 303.8,
            "night": 301.18,
            "eve": 303.5,
            "morn": 300.98
          },
          "pressure": 996.95,
          "humidity": 0,
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
                }
            ],
          "speed": 6.25,
          "deg": 243,
          "clouds": 3,
          "rain": 0.53
        },
        {
          "dt": 1403161200,
          "temp": {
            "day": 304.3,
            "min": 300.62,
            "max": 304.3,
            "night": 301.54,
            "eve": 303.78,
            "morn": 300.62
          },
          "pressure": 997.3,
          "humidity": 0,
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "sky is clear",
              "icon": "01d"
                }
            ],
          "speed": 6.04,
          "deg": 236,
          "clouds": 0
        }
    ]
    };
    callback(data);
  };

  /*

  */

  // Public API
  return {
    getWeather: getWeather
  };
});
