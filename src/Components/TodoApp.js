import React from 'react';
import FluxComponent from 'flummox/component';

import TodoProgress from './Todo/TodoProgress';
import TodoList from './Todo/TodoList';
import NewTodoForm from './Todo/NewTodoForm';

export default class TodoApp extends React.Component {
	render() {
		return (
			<FluxComponent 
				connectToStores={['todos']}
				render={storeState => {
					return (
						<div>
							<TodoProgress processCompletedPercentage={storeState.processCompletedPercentage} />
							<h1>Todo List</h1>
							<TodoList
								flux={this.props.flux} 
								todos={storeState.todos} />
							<NewTodoForm flux={this.props.flux} />
						</div>
					);
				}} 
			/>
		);
	}
}