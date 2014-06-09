'use strict';

describe('Controller: WeatherCtrl', function () {

	// load the controller's module
	beforeEach(module('weatherappApp'));

	var WeatherCtrl,
		scope;

	// Initialize the controller and a mock scope
	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		WeatherCtrl = $controller('WeatherCtrl', {
			$scope: scope
		});
	}));

	it('should have data in its initial state in scope', function () {
		expect(scope.data.isError).toBe(false);
		expect(scope.data.delimiterSeparatedCities).toBe("");
		expect(scope.data.cities).toEqual([]);
		expect(scope.data.weathers).toEqual([]);
		expect(scope.data.errors).toEqual([]);
	});

	it('should show model as invalid if the textbox is empty', function () {
		expect(scope.isModelValid()).toEqual(false);
	});

	it('should show model as valid if the textbox is not empty', function () {
		scope.data.delimiterSeparatedCities = "pune";
		expect(scope.isModelValid()).toEqual(true);
	});

	it('should return the model to its initial state when initModel is called', function () {
		scope.data.isError = true;
		scope.data.errors = [1, 2, 3];
		scope.data.weathers = [4, 5, 6];

		scope.initModel();
		expect(scope.data.isError).toBe(false);
		expect(scope.data.weathers).toEqual([]);
		expect(scope.data.errors).toEqual([]);
	});

	it('should populate weather data on successful call of openWeather service', function () {
		scope.showWeather(1);
		expect(scope.data.weathers).toEqual([1]);
	});

	it('should populate error data on unsuccessful call of openWeather service', function () {
		scope.showError(1);
		expect(scope.data.isError).toBe(true);
		expect(scope.data.errors).toEqual([1]);
	});
});
