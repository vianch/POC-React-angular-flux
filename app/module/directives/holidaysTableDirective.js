import HolidaysComponent from '../components/holidaysComponent';

angular.module('app').directive('holidaysTableDirective', function(reactDirective) {
	return reactDirective( HolidaysComponent );
}); 