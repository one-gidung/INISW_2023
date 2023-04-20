import React from 'react';
import PropTypes from 'prop-types';
import InputTodo from './InputTodo';
import TodoList from './TodoList';


const App = props => {
    return (
        <div className="container">
            <div className="card card-body bg-light">
                <div className="title">::TodolistApp</div>
            </div>
            <div className="card card-default card-borderless">
                <div className="card-body">
                    <InputTodo addTodo={props.addTodo} />
                    <TodoList todoList={props.todoList}
                        toggleCompleted={props.toggleCompleted} deleteTodo={props.deleteTodo} />
                </div>
            </div>
        </div>
    );
};

App.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
};

export default App;