import { ExpandMoreTwoTone } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const NewsItem = ({ expanded, news, setExpanded }) => {
  return (
    <Accordion expanded={expanded === news.id} onChange={(e, expanded) => setExpanded(expanded ? news.id : null)}>
      <AccordionSummary aria-controls="panel1bh-content" expandIcon={<ExpandMoreTwoTone />} id="panel1bh-header">
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h3">{news.title}</Typography>
          <Typography>{format(new Date(news.createdAt), 'yyyy-MM-dd hh:mm:ss')}</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {news.content.split('\n').map((content, index) => (
          <Typography component="pre" key={index} variant="h6">
            {content}
            <br />
          </Typography>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

NewsItem.propTypes = {
  expanded: PropTypes.string.isRequired,
  news: PropTypes.object.isRequired,
  setExpanded: PropTypes.func.isRequired,
};

export default NewsItem;
