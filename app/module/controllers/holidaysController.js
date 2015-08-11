import HolidaysActions from '../actions/holidaysActions';
import HolidaysStore from '../stores/holidaysStore';

angular.module('app').controller('holidaysController', ['$scope', ($scope) => {
	
	$scope.data = {
		content : [],
		display: ''
	};

	setInterval(() => { 
	  	HolidaysActions.fetchHolidayData();
	 },3000)


	HolidaysStore.listen((status) => {
	    $scope.data = {
		 	content : status,
		};
	}); 


	
	
}]);