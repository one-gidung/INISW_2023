import React, { useState } from 'react';
import App from './components/App';
import shortid from 'shortid';
import { produce } from 'immer';


const AppContainer = () => {
    const [ todoList, setTodoList ] = useState([
        { id: shortid.generate() , todo:"React 학습", completed :false },
        { id: shortid.generate(), todo:"Redux 학습", completed:false },
        { id: shortid.generate(), todo:"Bootstrap 살펴보기", completed:true }
    ]);
    const addTodo = (todo) => {
        let todoList2 = produce(todoList, (draft)=>{
            draft.push({ id:shortid.generate(), todo, completed:false});
        })
        setTodoList(todoList2);
    }
    const deleteTodo = (id) => {
        let deleteIndex = todoList.findIndex((todoItem)=> todoItem.id === id);
        let todoList2 = produce(todoList, (draft)=>{
            draft.splice(deleteIndex, 1);
        })
        setTodoList(todoList2);
    }
    const toggleCompleted = (id) => {
        let index = todoList.findIndex((todoItem)=> todoItem.id === id);
        let todoList2 = produce(todoList, (draft)=>{
            draft[index].completed = !draft[index].completed;
        })
        setTodoList(todoList2);
    }

    return (
        <App todoList={todoList} addTodo={addTodo}
        deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
    );
};

export default AppContainer;