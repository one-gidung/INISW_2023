import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = props => {
    let todoItems = props.todoList.map((todoItem)=>{
        return <TodoListItem key={todoItem.id} todoItem={todoItem} deleteTodo={props.deleteTodo}
            toggleCompleted={props.toggleCompleted} />
    })
    return (
        <div className="row"><div className="col">
            <ul className="list-group">
                {todoItems}
            </ul>
        </div></div>
    );
};

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
};

export default TodoList;