import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = props => {
    return (
        <li className={props.todoItem.completed ? "list-group-item list-group-item-success" : "list-group-item"}>
            <span className={props.todoItem.completed ? "todo-done pointer": "pointer"}
                onClick={ ()=>props.toggleCompleted(props.todoItem.id) }>
                {props.todoItem.todo}{ props.todoItem.completed ? "(완료)" : "" }
            </span>
            <span className="float-right badge badge-secondary pointer"
                onClick={ ()=>props.deleteTodo(props.todoItem.id) }>삭제</span>
        </li>
    );
};

TodoListItem.propTypes = {
    todoItem: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleCompleted: PropTypes.func.isRequired,
};

export default TodoListItem;