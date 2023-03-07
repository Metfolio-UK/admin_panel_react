
import Home from './screens/Home';
import {useEffect, useState} from 'react';
import './App.css'
function App() {
  const [width, setWindowWidth] = useState(0);

  useEffect( () => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [])

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };
  return (
    <div className="App">
      <Home width={width}/>
    </div>
  );
}

export default App;
