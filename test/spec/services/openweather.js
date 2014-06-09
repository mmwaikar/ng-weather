'use strict';

describe('Service: openWeather', function () {

	// load the service's module
	beforeEach(module('weatherappApp'));

	// instantiate service
	var openWeather;
	var httpBackend;

	beforeEach(inject(function (_openWeather_, $httpBackend) {
		openWeather = _openWeather_;
		httpBackend = $httpBackend;
	}));

	it('should return data for a correctly spelled city name', function () {
		var ldata;
		var callback = function (data) {
			ldata = data;
		};

		var returnedCity = {
			city: {
				id: 1712808,
				name: 'Goa'
			}
		};

		httpBackend.expect('GET', 'http://api.openweathermap.org/data/2.5/forecast/daily?cnt=14&APPID=ce3d05d0909ed5c72c484d06ae442e99&q=goa')
			.respond(200, [returnedCity]);

		openWeather.getWeather('goa', callback, null);
		httpBackend.flush();
		expect(ldata.city.name).toBe('Goab');
	});

	//  it('should do something', function () {
	//    expect(!!openWeather).toBe(true);
	//    //{"message":"","cod":"404"}
	//  });

});
