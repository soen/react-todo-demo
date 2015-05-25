import React from 'react';
import FluxComponent from 'flummox/component';

import TodoFlux from './TodoFlux';
import TodoApp from './Components/TodoApp';

const flux = new TodoFlux();

// Add debugging
flux.addListener('dispatch', payload => {	
	console.log('[Dispatch]: ', payload);
})

React.render(
	<FluxComponent flux={flux}>
		<TodoApp />
	</FluxComponent>,
	document.getElementById('app')
);