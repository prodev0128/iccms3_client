import { useEffect } from 'react';
import { useLocation } from 'react-router';

const useScrollTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

export default useScrollTop;
