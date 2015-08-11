import React from 'react';
import HolidaysTableRowComponent from './holidaysTableRowComponent';
import Uid from 'uid';

class HolidaysTableComponent extends React.Component {

	constructor(props) {
		super(props);
		this.divStyle = {
			marginTop: '50px'
		};
	}

	render() {
		return <div className="form-group">
				    <div className="col-sm-12"> 
				        <div className="table-responsive" style={this.divStyle}> 
				            <table className="table table-bordered tablesorter">
				                <thead>
				                <tr>
				                    <th>Dates</th>
				                    <th>Description</th>
				                </tr>
				                </thead>
				                <tbody>
   								{
				                    this.props.data.map((content) => {
				                    	return <HolidaysTableRowComponent 
				                    	key = {Uid(10)}
				                    	date = {content.date} 
				                    	description = {content.description}  />
				                    })
   								}
				                </tbody> 
				            </table>
				        </div>
				    </div>
				</div>
	}
}

export default HolidaysTableComponent;