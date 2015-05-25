import React from 'react';

export default class NewTodoForm extends React.Component {

	constructor() {
		super();
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	componentDidMount() {
		this.refs.input.getDOMNode().focus();
	}

	_handleSubmit(evt) {
		evt.preventDefault();

		const input = this.refs.input.getDOMNode();
	    const text = input.value.trim();

	    if (!text.length) return;

	    this.props.flux.getActions('todos').createTodo(text);
	    input.value = '';
	}

	render() {
		return (
			<form onSubmit={this._handleSubmit}>
				<input ref="input" type="text" placeholder="Add a new todo..." />
			</form>
		);
	}
}