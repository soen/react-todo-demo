import { Actions } from 'flummox';

export default class TodoActions extends Actions {

	// Cool stuff: The return value of each action 
	// is automatically dispatched

	createTodo(text) {
		return {
			text,
			completed: false,
		};
	}

	toggleCompleted(index) {
		return index;
	}
}