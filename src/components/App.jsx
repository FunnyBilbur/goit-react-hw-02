import './App.css';
import { useState } from 'react';

const App = () => {
  // let clicks = 0;
  let [clicks, setClick] = useState(2024);

  const handleClick = () => {
    setClick(clicks + 1);
  };

  return <button onClick={handleClick}>Current: {clicks}</button>;
};

export default App;
