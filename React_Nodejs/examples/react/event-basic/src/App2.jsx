import React, { useState, useRef } from 'react';

const App2 = () => {
    const [x,setX] = useState(10);
    const [y,setY] = useState(20);
    const [result, setResult] = useState(30);
    const inputX = useRef(null);
    const inputY = useRef(null);
    const add = () => {
        let x = inputX.current.value;
        let y = inputY.current.value;
        setResult(parseInt(x) + parseInt(y));
    }

    return (
        <div>
            <h2>비제어 컴포넌트</h2><hr/>
            x : <input ref={inputX} id="x" type="text" defaultValue={x} /><br/>
            y : <input ref={inputY} id="y" type="text" defaultValue={y} /><br/>
            <button onClick={add}>계산</button><br/>
            결과 : <span>{result}</span>
        </div>
    );
};

export default App2;