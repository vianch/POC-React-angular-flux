import React from 'react';
import HolidaysTableComponent from './holidaysTableComponent';
import HolidaysDisplayComponent from './holidaysDisplayComponent';
import HolidaysStore from '../stores/holidaysStore';

class HolidaysComponent extends React.Component {

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
		return <div>
					<div className="row"><HolidaysDisplayComponent display={this.props.display} /></div>

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

HolidaysComponent.propTypes = {
	display: React.PropTypes.string.isRequired
}

HolidaysComponent.defaultProps = {
	display: 'default'
}; 

export default HolidaysComponent;