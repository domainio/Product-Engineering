import React, { useState } from 'react';
import {
  Button, CircularProgress,
  Card, CardActionArea, CardMedia, CardContent, Typography, CardActions
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PerfService from '../services/PerfService';
import PerfTraceKeys from '../consts/PerfTraceKeys';
import ShopService from '../services/ShopService';

const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};


const PerfSection = () => {

  const [perfLoading, setPerfLoading] = useState(false);
  const classes = useStyles();
  const traceClickButton = PerfService.trace(PerfTraceKeys.PayProcess);
  
  const onClickPayNow = async () => {
    console.log('on click pay > api call');
    setPerfLoading(true);
    console.log('performance start trace');
    traceClickButton.start();
    await ShopService.payItems();
    sleep(5000).then(() => {
      traceClickButton.stop();
      console.log('performance stop trace');
      setPerfLoading(false);
    });
  };

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Performance"
          height="140"
          image="https://img.favpng.com/19/3/21/software-performance-testing-software-testing-functional-testing-computer-icons-system-testing-png-favpng-rgN8fQDamAZyvtgvk8f5j1XGi.jpg"
          title="Performance"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Performance
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Measure system behaviour
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            onClick={onClickPayNow}
            disabled={perfLoading}
          >Pay Now</Button>
          {perfLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </CardActions>
    </Card>
  )
};

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '350px'
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: 'blue',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default PerfSection;