
import Home from './screens/Home';
import Orders from './screens/Orders';
import {useEffect, useState} from 'react';
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
