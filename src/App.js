import './App.css';
import { useState } from 'react';
import Home from './pages/Home';
import IntroPage from './pages/IntroPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [is, setIs] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Home setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <IntroPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
