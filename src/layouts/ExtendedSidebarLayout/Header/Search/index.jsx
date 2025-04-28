import {
  AppSettingsAltTwoTone,
  CloseTwoTone,
  ContactSupportTwoTone,
  DashboardTwoTone,
  KeyboardArrowRightTwoTone,
  RestoreTwoTone,
  SearchTwoTone,
  StarTwoTone,
} from '@mui/icons-material';
import {
  alpha,
  Box,
  Card,
  CircularProgress,
  Dialog,
  Divider,
  Grid2,
  IconButton,
  InputBase,
  Link,
  List,
  ListItem,
  Slide,
  styled,
  Tooltip,
  Typography,
  useTheme,
} from '@mui/material';
import { forwardRef, Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Scrollbar from '../../../../components/Scrollbar';

const wait = (time) => new Promise((res) => setTimeout(res, time));

const Transition = forwardRef((props, ref) => {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogWrapper = styled(Dialog)(
  () => `
    .MuiDialog-container {
        height: auto;
    }
    
    .MuiDialog-paperScrollPaper {
        max-height: calc(100vh - 64px)
    }
`,
);

const SearchInputWrapper = styled(InputBase)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(18)};
    padding: ${theme.spacing(2)};
    width: 100%;
`,
);

const IconButtonWrapper = styled(IconButton)(
  ({ theme }) => `
        width: ${theme.spacing(4)};
        height: ${theme.spacing(4)};
        border-radius: ${theme.general.borderRadiusLg};
`,
);

const ListButton = styled(Box)(
  ({ theme }) => `
      background-color: transparent;
      color:  ${theme.colors.alpha.black[100]};
      transition: ${theme.transitions.create(['all'])};
      border: ${theme.colors.alpha.black[10]} solid 1px;
      border-radius: ${theme.general.borderRadius};
      padding: ${theme.spacing(1)};
      margin: ${theme.spacing(1, 0)};
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > div > .MuiSvgIcon-root {
        color:  ${theme.colors.alpha.black[50]};
        transition: ${theme.transitions.create(['all'])};
      }

      &:hover {
        background-color: ${alpha(theme.colors.primary.main, 0.08)};
        color:  ${theme.colors.primary.main};
        border-color: ${alpha(theme.colors.primary.main, 0.3)};

        & > div > .MuiSvgIcon-root {
          color:  ${theme.colors.primary.main};
        }
      }
`,
);

const searchTerms = {
  Applications: [
    {
      title: 'Events Manager',
    },
    {
      title: 'Messenging Platform',
    },
  ],
  Dashboards: [
    {
      title: 'Automation UI',
    },
    {
      title: 'Banking Performance',
    },
    {
      title: 'Fitness Statistics',
    },
  ],
  Management: [
    {
      title: 'Products Admin',
    },
    {
      title: 'Customers Database',
    },
    {
      title: 'Learning Center',
    },
    {
      title: 'Invoices Archive',
    },
  ],
};

const HeaderSearch = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [searchValue, setSearchValue] = useState('');
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(false);

  const submitSearch = async (event) => {
    event.preventDefault();
    setSearchResults(false);
    setSearchLoading(true);
    await wait(1500);
    setSearchLoading(false);
    setSearchResults(true);
  };

  const handleSearchChange = async (event) => {
    event.preventDefault();

    if (event.target.value) {
      setSearchResults(false);
      setSearchValue(event.target.value);
      setSearchLoading(true);
      await wait(1500);
      setSearchLoading(false);
      setSearchResults(true);
    } else {
      setSearchValue('');
      setSearchResults(false);
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip arrow title={t('Search')}>
        <IconButtonWrapper color="primary" onClick={handleClickOpen}>
          <SearchTwoTone fontSize="small" />
        </IconButtonWrapper>
      </Tooltip>

      <DialogWrapper
        fullWidth
        keepMounted
        maxWidth="sm"
        open={open}
        scroll="paper"
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <Box>
          <form onSubmit={submitSearch}>
            <Box alignItems="center" display="flex">
              <Box alignItems="center" display="flex" flexGrow={1}>
                <SearchTwoTone
                  sx={{
                    color: theme.colors.secondary.main,
                    ml: 2,
                  }}
                />
                <SearchInputWrapper
                  autoFocus
                  fullWidth
                  placeholder={t('Search terms here...')}
                  value={searchValue}
                  onChange={handleSearchChange}
                />
              </Box>
              <Card
                sx={{
                  background: theme.colors.alpha.black[10],
                  ml: 'auto',
                  mr: 2,
                  px: 1,
                  py: 0.5,
                }}
              >
                <Typography color="text.secondary" fontWeight="bold" variant="body2">
                  esc
                </Typography>
              </Card>
            </Box>
          </form>
        </Box>
        <Divider />
        {!searchLoading && (
          <>
            {!searchResults && (
              <Typography
                component="div"
                variant="subtitle1"
                sx={{
                  alignItems: 'center',
                  background: theme.colors.info.lighter,
                  borderRadius: theme.general.borderRadius,
                  color: theme.colors.info.main,
                  display: 'flex',
                  fontSize: theme.typography.pxToRem(13),
                  mx: 2,
                  my: 2,
                  p: 1,
                }}
              >
                <ContactSupportTwoTone
                  sx={{
                    fontSize: theme.typography.pxToRem(18),
                    mr: 0.8,
                  }}
                />
                {t('Start typing to see the search results...')}
              </Typography>
            )}
          </>
        )}
        {searchLoading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              my: 5,
            }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <>
            {searchResults ? (
              <Box
                sx={{
                  height: 450,
                }}
              >
                <Scrollbar>
                  {Object.keys(searchTerms).map((type, index) => (
                    <Box key={index} px={2} py={1}>
                      <Typography
                        variant="h5"
                        sx={{
                          py: 1,
                        }}
                      >
                        {type}
                      </Typography>
                      {searchTerms[type].map((result) => (
                        <Fragment key={result.title}>
                          <ListButton>
                            <Box alignItems="flex-start" display="flex">
                              <RestoreTwoTone
                                fontSize="small"
                                sx={{
                                  mr: 1,
                                }}
                              />
                              <Typography>{result.title}</Typography>
                            </Box>
                            <KeyboardArrowRightTwoTone fontSize="small" />
                          </ListButton>
                        </Fragment>
                      ))}
                    </Box>
                  ))}
                </Scrollbar>
              </Box>
            ) : (
              <Box
                sx={{
                  height: 450,
                }}
              >
                <Scrollbar>
                  <Box pb={2} px={2}>
                    <Typography
                      variant="h5"
                      sx={{
                        pb: 0.5,
                      }}
                    >
                      {t('Recent searches')}
                    </Typography>
                    <ListButton>
                      <Box alignItems="center" display="flex">
                        <RestoreTwoTone
                          fontSize="small"
                          sx={{
                            mr: 1,
                          }}
                        />
                        <Typography>Analytics dashboard</Typography>
                      </Box>
                      <Box>
                        <Tooltip arrow placement="top" title={t('Save this search')}>
                          <IconButton color="primary" size="small">
                            <StarTwoTone fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip arrow placement="top" title={t('Remove this search from history')}>
                          <IconButton color="error" size="small">
                            <CloseTwoTone fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </ListButton>
                    <ListButton>
                      <Box alignItems="center" display="flex">
                        <RestoreTwoTone
                          fontSize="small"
                          sx={{
                            mr: 1,
                          }}
                        />
                        <Typography>Top navigation layout</Typography>
                      </Box>
                      <Box>
                        <Tooltip arrow placement="top" title={t('Save this search')}>
                          <IconButton color="primary" size="small">
                            <StarTwoTone fontSize="small" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip arrow placement="top" title={t('Remove this search from history')}>
                          <IconButton color="error" size="small">
                            <CloseTwoTone fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </ListButton>
                    <Typography
                      variant="h5"
                      sx={{
                        pb: 0.5,
                        pt: 2,
                      }}
                    >
                      {t('Saved searches')}
                    </Typography>
                    <ListButton>
                      <Box alignItems="center" display="flex">
                        <StarTwoTone
                          fontSize="small"
                          sx={{
                            mr: 1,
                          }}
                        />
                        <Typography>Hospital overview page</Typography>
                      </Box>
                      <Box>
                        <Tooltip arrow placement="top" title={t('Remove this search from favourites')}>
                          <IconButton color="error" size="small">
                            <CloseTwoTone fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </ListButton>
                    <Divider
                      sx={{
                        my: 4,
                      }}
                    />
                    <Typography variant="h5">{t('Popular searches')}</Typography>
                    <Box p={4}>
                      <Grid2 container spacing={3}>
                        <Grid2 size={{ sm: 6, xs: 12 }}>
                          <Box alignItems="center" display="flex" fontSize={13} mb={1}>
                            <DashboardTwoTone
                              sx={{
                                color: theme.colors.primary.main,
                                fontSize: theme.typography.pxToRem(18),
                                mr: 1,
                              }}
                            />
                            <b>{t('Dashboards')}</b>
                          </Box>
                          <List disablePadding>
                            <ListItem
                              disableGutters
                              sx={{
                                pl: 3,
                                py: 0.4,
                              }}
                            >
                              <Link color="primary" fontSize={13} href="#">
                                {t('Tasks for today')}
                              </Link>
                            </ListItem>
                            <ListItem
                              disableGutters
                              sx={{
                                pl: 3,
                                py: 0.4,
                              }}
                            >
                              <Link color="primary" fontSize={13} href="#">
                                {t('Statistics dashboard')}
                              </Link>
                            </ListItem>
                            <ListItem
                              disableGutters
                              sx={{
                                pl: 3,
                                py: 0.4,
                              }}
                            >
                              <Link color="primary" fontSize={13} href="#">
                                {t('Monitoring admin')}
                              </Link>
                            </ListItem>
                            <ListItem
                              disableGutters
                              sx={{
                                pl: 3,
                                py: 0.4,
                              }}
                            >
                              <Link color="primary" fontSize={13} href="#">
                                {t('Banking interface')}
                              </Link>
                            </ListItem>
                          </List>
                        </Grid2>
                        <Grid2 size={{ sm: 6, xs: 12 }}>
                          <Box alignItems="center" display="flex" fontSize={13} mb={1}>
                            <AppSettingsAltTwoTone
                              sx={{
                                color: theme.colors.primary.main,
                                fontSize: theme.typography.pxToRem(18),
                                mr: 1,
                              }}
                            />
                            <b>{t('Management')}</b>
                          </Box>
                          <List disablePadding>
                            <ListItem
                              disableGutters
                              sx={{
                                pl: 3,
                                py: 0.4,
                              }}
                            >
                              <Link color="primary" fontSize={13} href="#">
                                {t('Calendar')}
                              </Link>
                            </ListItem>
                            <ListItem
                              disableGutters
                              sx={{
                                pl: 3,
                                py: 0.4,
                              }}
                            >
                              <Link color="primary" fontSize={13} href="#">
                                {t('File manager')}
                              </Link>
                            </ListItem>
                            <ListItem
                              disableGutters
                              sx={{
                                pl: 3,
                                py: 0.4,
                              }}
                            >
                              <Link color="primary" fontSize={13} href="#">
                                {t('Products list')}
                              </Link>
                            </ListItem>
                            <ListItem
                              disableGutters
                              sx={{
                                pl: 3,
                                py: 0.4,
                              }}
                            >
                              <Link color="primary" fontSize={13} href="#">
                                {t('Recent orders')}
                              </Link>
                            </ListItem>
                          </List>
                        </Grid2>
                      </Grid2>
                    </Box>
                  </Box>
                </Scrollbar>
              </Box>
            )}
          </>
        )}
      </DialogWrapper>
    </>
  );
};

export default HeaderSearch;
