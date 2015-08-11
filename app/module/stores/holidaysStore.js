import Reflux from 'reflux';
import HolidaysActions from '../actions/holidaysActions';
import request from 'superagent';


const HolidaysStore = Reflux.createStore({

	listenables: [HolidaysActions],
	holidaysData: [],

	init: function() {
		this.fetchHolidayData();
	},

	fetchHolidayData: function() {
		let url = "/get-data";

		request.get(url)
		.end((error, response) => {
			if(!error) {  
				this.holidaysData = JSON.parse(response.text);
				this.trigger(this.holidaysData);
			} else {
				console.error(`Can not connet to the server ${url}!`);
			}
		});
	}	
});

export default HolidaysStore;

