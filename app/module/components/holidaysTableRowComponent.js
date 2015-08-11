import React from 'react';

class HolidaysTableRowComponent extends React.Component {
    
    static propTypes;
    static defaultProps;
    
    constructor(props) {
    	super(props);
    }

	render() {
		return <tr>
			<td> {this.props.date} </td>
			<td>{this.props.description}</td>
		</tr>
	}
}

HolidaysTableRowComponent.propTypes = {
	date: React.PropTypes.string.isRequired,
	description: React.PropTypes.string.isRequired
}

HolidaysTableRowComponent.defaultProps = {
	date: '',
	description: ''
}; 

export default HolidaysTableRowComponent;