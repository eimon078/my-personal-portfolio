import './App.css';
import { useEffect, useState } from 'react';
import PageLoader from './components/PageLoader/PageLoader';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }, [])
  return (
    <div className="App">
      {
        loading ? <PageLoader props={loading}></PageLoader>
          :
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home></Home>} />
            </Routes>
          </BrowserRouter>
      }
    </div>
  );
}

export default App;
