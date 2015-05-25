import React from 'react';

export default class TodoListItem extends React.Component {

	render() {
		const id = `todolist-item-${this.props.index}`;

		return (
			<li>
				<input
					id={id}
					type="checkbox"
					onChange={this.props.onChange}
					checked={this.props.checked} />

				<label htmlFor={id}>
					{this.props.text}
				</label>
			</li>
		);
	}
}