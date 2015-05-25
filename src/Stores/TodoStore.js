import { Store } from 'flummox';

export default class TodoStore extends Store {

	constructor(flux) {
		super();

		const todoActionIds = flux.getActionIds('todos');

		this.register(todoActionIds.createTodo, this.handleNewTodo);
		this.register(todoActionIds.toggleCompleted, this.handleToggleCompleted);

		this.state = {
			todos: [],
			processCompletedPercentage: 0,
		};
	}	

	_getCompletedCount() {
		return this.state.todos.filter((todo) => todo.completed).length;
	}

	handleNewTodo(todo) {
		const todos = this.state.todos.concat([todo]);

		this.setState({
			todos: todos,
			processCompletedPercentage: (this._getCompletedCount() / (todos.length + 1)) * 100,
		});
	}

	handleToggleCompleted(index) {
		const todos = this.state.todos;
	    todos[index].completed = !todos[index].completed;

	    const processCompletedPercentage = (this._getCompletedCount() / todos.length) * 100;

	    this.setState({ 
	    	todos: todos,
	    	processCompletedPercentage: processCompletedPercentage,
	    });
	}
}