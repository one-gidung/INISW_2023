import React, { useState } from 'react';

const App1 = () => {
    const [x,setX] = useState(10);
    const [y,setY] = useState(20);
    
    return (
        <div>
            <h2>제어 컴포넌트</h2><hr/>
            x : <input id="x" type="text" value={x} onChange={ (e)=>setX(e.target.value) } /><br/>
            y : <input id="y" type="text" value={y} onChange={ (e)=>setY(e.target.value) } /><br/>
            <br/>
            결과 : <span>{parseInt(x)+parseInt(y)}</span>
        </div>
    );
};

export default App1;