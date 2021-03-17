import React from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

	const todoData = [
		{label: 'Выпить кофе', important: false, id:1},
		{label: 'Ответить на почту', important: true, id:2},
		{label: 'Почитать', important: true, id:3},
		{label: 'Купить продукты', important: false, id:4}
	];

	return (
		<div className="todo-app">
			<AppHeader toDo={1} done={3} />
			<div className="top-panel d-flex">
				<SearchPanel />
				<ItemStatusFilter />
			</div>
			<TodoList todos={todoData} />
		</div>
	);
};

export default App;