import React from 'react';

class HolidaysDisplayComponent extends React.Component {
    
	render() {
		return <div className="disply-content">Display input content: {this.props.display}</div>
	}
}

HolidaysDisplayComponent.propTypes = {
	display: React.PropTypes.string.isRequired
}

HolidaysDisplayComponent.defaultProps = {
	display: ''
}; 

export default HolidaysDisplayComponent;