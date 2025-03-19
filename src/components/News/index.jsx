import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import NewsDialog from './NewsDialog';

const News = ({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedDate = localStorage.getItem('dontShowTodayNews');
    const today = new Date().toISOString().split('T')[0];
    setOpen(savedDate !== today);
  }, []);

  return (
    <>
      {children}
      <NewsDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
};

News.propTypes = {
  children: PropTypes.node.isRequired,
};

export default News;
