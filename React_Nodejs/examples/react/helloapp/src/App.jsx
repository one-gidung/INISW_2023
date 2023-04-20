import React, { useState } from 'react';
import CountryList from './CountryList';
import styles from './styles';
import Footer from './Footer';

const App = () => {
  const [countries, setContries] = useState([
    { no:1, country:'이집트', visited:false },
    { no:2, country:'일본',  visited:true },
    { no:3, country:'피지', visited:false },
    { no:4, country:'콜롬비아', visited:false }
  ]);
  const [theme, setTheme] = useState("basic");

  let msg = (<i>{'World'}</i>);
  const add = (x,y) => {
    return <div className="card card-body bg-light mb-3">{x} + {y} = {x+y} </div>
  }
  return (
    <div className="container">
      <h1>Hello {msg}!!</h1>
      <hr style={styles.dashStyle}/>
      { add(4,5) }
      <CountryList countries={countries} />
      <Footer theme={theme} />
    </div>
  );
};

export default App;