import React, { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = props => {
    const [todo, setTodo] = useState("");
    const addHandler = () => {
        if (todo.trim().length >= 2) {
            props.addTodo(todo.trim());
            setTodo("");
        }
    }
    const enterInput = (e) => {
        if (e.keyCode === 13) {
            addHandler();
        }
    }

    return (
        <div className="row">
        <div className="col">
            <div className="input-group">
                <input id="msg" type="text" className="form-control" name="msg"
                    placeholder="할일을 여기에 입력!"
                    value={todo}
                    onChange={ (e)=> setTodo(e.target.value) }
                    onKeyUp={enterInput} />
                <span className="btn btn-primary input-group-addon"
                    onClick={addHandler}>추가</span>
            </div>
        </div>
        </div>
    );
};

InputTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
};

export default InputTodo;