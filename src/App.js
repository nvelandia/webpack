import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);
  const [values, setvalues] = useState();

  const handleClick = () => {
    setCounter(counter + 1);
    setvalues(values.concat(counter));
  };

  return (
    <div className='container'>
      <h1>Hello Nico</h1>
      <button onClick={handleClick}>Press</button>
      <div>{counter}</div>
    </div>
  );
};

export default App;
