import ArrowForwardTwoToneIcon from '@mui/icons-material/ArrowForwardTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';
import {
  alpha,
  Box,
  Button,
  Card,
  Divider,
  Grid2,
  IconButton,
  LinearProgress,
  linearProgressClasses,
  styled,
  Typography,
  useTheme,
} from '@mui/material';
import Chart from 'react-apexcharts';
import CountUp from 'react-countup';
import { useTranslation } from 'react-i18next';

const LinearProgressError = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.error.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.error.main};
        }
    `,
);

const LinearProgressSuccess = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.success.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.success.main};
        }
    `,
);

const LinearProgressWarning = styled(LinearProgress)(
  ({ theme }) => `
        height: 10px;
        border-radius: ${theme.general.borderRadiusLg};

        &.${linearProgressClasses.colorPrimary} {
            background-color: ${alpha(theme.colors.warning.main, 0.1)};
        }
        
        & .${linearProgressClasses.bar} {
            border-radius: ${theme.general.borderRadiusLg};
            background-color: ${theme.colors.warning.main};
        }
    `,
);

const Block3 = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const Box1Options = {
    chart: {
      background: 'transparent',
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    colors: [theme.colors.warning.main],
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0,
        shade: 'light',
        shadeIntensity: 0.2,
        stops: [0, 100],
        type: 'vertical',
      },
    },
    labels: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Last Week',
      'Last Month',
      'Last Year',
    ],
    legend: {
      show: false,
    },
    stroke: {
      colors: [theme.colors.warning.main],
      show: true,
      width: 2,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };
  const Box1Data = [
    {
      data: [2.3, 3.1, 4.0, 3.8, 5.1, 3.6, 4.0, 3.8, 5.1, 3.6, 3.2],
      name: 'Total Sales',
    },
  ];

  return (
    <Card>
      <Box alignItems="center" display="flex" justifyContent="space-between" px={2} py={1.8}>
        <Box>
          <Typography
            gutterBottom
            variant="h4"
            sx={{
              fontSize: `${theme.typography.pxToRem(16)}`,
            }}
          >
            {t('Weekly sales')}
          </Typography>
          <Typography variant="subtitle2">{t('Reports for what we sold this week')}</Typography>
        </Box>
        <IconButton color="primary">
          <MoreVertTwoToneIcon />
        </IconButton>
      </Box>
      <Divider />
      <Box pt={4} px={5}>
        <Typography
          component="h3"
          fontWeight="bold"
          sx={{
            fontSize: `${theme.typography.pxToRem(45)}`,
            mb: 4,
          }}
        >
          <CountUp
            decimal=","
            decimals={3}
            delay={3}
            duration={4}
            end={487.385}
            prefix="$"
            separator=""
            start={0}
            suffix=""
          />
        </Typography>

        <Grid2 container spacing={6}>
          <Grid2 item md={4} sm={6} xs={12}>
            <Typography variant="h3">14%</Typography>
            <LinearProgressError
              value={12}
              variant="determinate"
              sx={{
                my: 1,
              }}
            />
            <Typography color="text.secondary" variant="body2">
              {t('Cars')}
            </Typography>
          </Grid2>
          <Grid2 item md={4} sm={6} xs={12}>
            <Typography variant="h3">46%</Typography>
            <LinearProgressSuccess
              value={46}
              variant="determinate"
              sx={{
                my: 1,
              }}
            />
            <Typography color="text.secondary" variant="body2">
              {t('Outdoor')}
            </Typography>
          </Grid2>
          <Grid2 item md={4} sm={12} xs={12}>
            <Typography variant="h3">40%</Typography>
            <LinearProgressWarning
              value={40}
              variant="determinate"
              sx={{
                my: 1,
              }}
            />
            <Typography color="text.secondary" variant="body2">
              {t('Electronics')}
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
      <Chart height={221} options={Box1Options} series={Box1Data} type="area" />
      <Box
        p={3}
        sx={{
          textAlign: 'center',
        }}
      >
        <Button endIcon={<ArrowForwardTwoToneIcon />} variant="outlined">
          {t('View complete report')}
        </Button>
      </Box>
    </Card>
  );
};

export default Block3;
