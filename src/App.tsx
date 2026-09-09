import { useState, useEffect } from 'react';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPath === '/contact') {
    return <ContactPage />;
  }

  if (currentPath === '/404') {
    return <NotFoundPage />;
  }

  return <HomePage />;
}

export default App;



