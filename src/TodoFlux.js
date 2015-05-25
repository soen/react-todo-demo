import { Flux } from 'flummox';

import TodoActions from './Actions/TodoActions';
import TodoStore from './Stores/TodoStore';

// This is where the Flux part of our application gets bootstrapped
export default class TodoFlux extends Flux {
	
	constructor() {
		super(); // this is important 

		// Here we setup the actions and stores of our app
		this.createActions('todos', TodoActions);
		this.createStore('todos', TodoStore, this);
	}
}