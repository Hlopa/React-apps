import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
	return (
		<ul>
			<li>Learn React</li>
			<li>Build Awersome App</li>
		</ul>
	);
};

const AppHeader = () => {
	const divSryle = {
		backgroundColor: "red"
	};
	return <h1 style={divSryle}>My Todo List</h1>;
};

const SearchPanel = () => <input placeholder='search' />;

const App = () => {
	return (
		<div>
			<AppHeader />
			<SearchPanel />
			<TodoList />
		</div>
	);
};


ReactDOM.render(
	<App />,
	document.getElementById("root")
);

