import HolidaysTableComponent from '../components/holidaysTableComponent';

angular.module('app').directive('holidaysTableDirective', function(reactDirective) {
	return reactDirective( HolidaysTableComponent );
}); 