ng-weather
==========

This application shows weather using the OpenWeatherMap API. AngularJS is the framework used to organize front-end code. Following are the main points about this code-base -

1. [Bootstrap](http://getbootstrap.com) is used for basic UI styling

2. [Yeoman](http://yeoman.io/) which consists of -
  - Yo - is used for scaffolding the application
  - Grunt - is used to build, preview and test the project
  - Bower - is used for dependency management
  - [AngularJS generator](https://github.com/yeoman/generator-angular) - scaffolds the application which uses AngularJS. This generator is installed using *NPM*.
  
3. The OpenWeatherMap API is wrapped in an **Angular factory** called *openWeather*, which uses the **$http** service from Angular. This factory exposes a method called *getWeather* with the following parameters -
  - city - name of the city for which to find the weather
  - callback - the success callback (which actually displays the data on the page) 
  - errorCallback - the error callback (which displays the errors on the page, if any)

4. [Underscore](http://underscorejs.org/) provides functional programming paradigms to be used directly from any Javascript code-base. Underscore is used from the *WeatherCtrl* controller.

5. WeatherCtrl controller interacts with the weather.html page.

###Instructions for running the application
Please clone the above git repo and switch to develop branch. Once you are in the root directory, run grunt server which opens http://127.0.0.1:9000/#/ as the main page. Then navigate to the http://127.0.0.1:9000/#/weather page which shows the weather for the cities entered by the user in the text box. The Go button remains disabled until the user enters some name (i.e. until it remains empty).

  - Errors, if any, are shown in a separate panel
  - Weather data is shown in its own panel, which has a table for showing the min., max and other temperatures.
  
####Shortcomings
I tried to use the **Angular date filter** in weather.html page which shows the forecast for a particular date using 
```
<td>{{item.dt | date:'dd-MMM-yyyy' }}</td>
```
but it is always showing the date as January 17, 1970, so I am not formatting it, and hence it shows up on the screen as a non human-readable date.
    