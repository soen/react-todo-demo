import React from 'react';

class TodoProgress extends React.Component {

	render() {
		const style = {
			height: '5px',
			width: this.props.processCompletedPercentage,
			backgroundColor: 'orange',
		};

		return (
			<div style={style} />
		);
	}
}

TodoProgress.propTypes = {
	processCompletedPercentage: React.PropTypes.number.isRequired
}

export default TodoProgress;