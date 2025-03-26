import { Box, Button, Checkbox, DialogActions, DialogContent, DialogTitle, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchNews } from '../../redux/actions/news';
import { useNews } from '../../redux/selectors';
import CustomDialog from '../CustomDialog';
import Scrollbar from '../Scrollbar';
import NewsItem from './NewsItem';

const NewsDialog = ({ onClose, open }) => {
  const dispatch = useDispatch();
  const { news } = useNews();

  const title = 'News';
  const [dontShow, setDontShow] = useState(false);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (!news.length) {
      return;
    }
    setExpanded(news[0].id);
  }, [news]);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const handleClose = () => {
    if (dontShow) {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem('dontShowTodayNews', today);
    }
    onClose();
  };

  return (
    <CustomDialog draggable maxWidth="md" open={open} onClose={handleClose}>
      <DialogTitle style={{ cursor: 'move' }}>{title}</DialogTitle>
      <DialogContent>
        <Box sx={{ height: 500 }}>
          <Scrollbar>
            {news.map((item) => (
              <NewsItem expanded={expanded} key={item.id} news={item} setExpanded={setExpanded} />
            ))}
          </Scrollbar>
        </Box>
      </DialogContent>
      <DialogActions>
        <FormControlLabel
          fullWidth
          control={<Checkbox checked={dontShow} color="error" onChange={(e) => setDontShow(e.target.checked)} />}
          label="Don't show today"
        />
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </CustomDialog>
  );
};

NewsDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default NewsDialog;
