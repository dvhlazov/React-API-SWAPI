import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';
import { useState, useEffect } from 'react';
import style from './App.css';



function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect( () => {
    const loadingTimer = setTimeout(() => {
      setIsLoaded(false);

    }, 3000);
    return () => clearTimeout(loadingTimer);
  })

  return (
    <div>
      
        <>
        <div className='container'>
          <Header/>
          <Content/>
          <Footer/>
          </div>
        </>
      
    </div>
  );
}

export default App;
