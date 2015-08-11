import React from 'react';
import HolidaysTableRowComponent from './holidaysTableRowComponent';
import Uid from 'uid';

class HolidaysTableComponent extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return <div className="form-group">
				    <div className="col-sm-12">
				        <div className="table-responsive">
				            <table className="table table-bordered tablesorter">
				                <thead>
				                <tr>
				                    <th>Dates <i className="fa" ng-class="{false:'fa-caret-down',true:'fa-caret-up'}[isAscendantDate]" ng-hide="isAscendantDate === null"></i></th>
				                    <th>Description <i className="fa" ng-class="{false:'fa-caret-down',true:'fa-caret-up'}[isAscendantDescription]" ng-hide="isAscendantDescription === null"></i></th>
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