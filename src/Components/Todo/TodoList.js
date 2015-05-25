import React from 'react';

import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {

	_onToggleCompleted(index) {
		this.props.flux.getActions('todos').toggleCompleted(index);
	}

	render() {
		let todoItems = [];

		if (this.props.todos) {
			todoItems = this.props.todos.map((todo, index) => {
				return <TodoListItem
							key={index}
							index={index}
							text={todo.text}
							checked={todo.completed}
							onChange={this._onToggleCompleted.bind(this, index)} />;
	        });
		}

		return (
			<ul className="todo-list">
				{todoItems}
			</ul>
		);
	}
}