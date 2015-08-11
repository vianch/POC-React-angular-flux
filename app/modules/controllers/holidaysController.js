import HolidaysActions from '../actions/holidaysActions';

angular.module('app').controller('holidaysController', ['$scope', ($scope) => {
	$scope.data = {
		 content : {
			date: 'Date1', 
			description: 'Description 1',
			displayName: 'Display name scope'
		}
	};

	setInterval(() => { 
	  	HolidaysActions.fetchHolidayData();
	 },2500)
	
}]);