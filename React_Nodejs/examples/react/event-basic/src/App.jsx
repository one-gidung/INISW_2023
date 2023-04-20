import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const add = ()=>{
    // setCount(count+1);
    setCount(count+2);
    setCount((count)=> count+1);
  }
  return (
    <div>
      <button onClick={add}> + </button>
      <button onClick={ ()=> setCount(count-1) }> - </button>
      <div>count: {count}</div>
    </div>
  );
};

export default App;