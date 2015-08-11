import React from 'react';
import HolidaysTableComponent from './holidaysTableComponent';
import HolidaysStore from '../stores/holidaysStore';

export default class HolidaysComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data : []
		}
	}

	componentDidMount() {
        this.unsubscribe = HolidaysStore.listen((status) => {
        	this.setState({
				data: status
			});
        });
    }

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return <div className="bas-wrapper col-md-12 os-window-content unselectable">
				    <div className="row">
				        <div className="bas-content-wrapper col-md-12">
				            <div ui-view="webFormTemplate">
					            <div className="bas-form-wrapper row">
					                <div className="bas-form-content col-md-12">
					                    <div className="row bas-custom-row">
					                       
					                         <div className="bas-holidays-table bas-table-wrapper">
					                              
					                         	<HolidaysTableComponent data={this.state.data} />

					                         </div>

					                    </div>
					                </div>
					            </div>
				            </div>
				        </div>
				    </div>
				</div>
	}

}