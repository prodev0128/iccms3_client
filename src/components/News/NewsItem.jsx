import { ExpandMoreTwoTone } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const NewsItem = ({ expanded, news, setExpanded }) => {
  return (
    <>
      <Accordion expanded={expanded === news.id} onChange={(e, expanded) => setExpanded(expanded ? news.id : null)}>
        <AccordionSummary aria-controls="panel1bh-content" expandIcon={<ExpandMoreTwoTone />} id="panel1bh-header">
          <Typography variant="h3">{news.title}</Typography>
          <Typography>{news.createdAt}</Typography>
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
    </>
  );
};

NewsItem.propTypes = {
  expanded: PropTypes.string.isRequired,
  news: PropTypes.object.isRequired,
  setExpanded: PropTypes.func.isRequired,
};

export default NewsItem;
