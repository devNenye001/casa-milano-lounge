import { useState, useEffect } from 'react';
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import EventsPage from './pages/Events';
import GalleryPage from './pages/Gallery';
import RestaurantPage from './pages/Restaurant';
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

  if (currentPath === '/events') {
    return <EventsPage />;
  }

  if (currentPath === '/gallery') {
    return <GalleryPage />;
  }

  if (currentPath === '/restaurant') {
    return <RestaurantPage />;
  }

  if (currentPath === '/404') {
    return <NotFoundPage />;
  }

  return <HomePage />;
}

export default App;



