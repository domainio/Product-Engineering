import React, { useState } from 'react';
import {
  Button, Fab,
  Card, CardActionArea, CardMedia, CardContent, Typography, CardActions
} from '@material-ui/core';
import AnalyticsEvents from '../consts/AnalyticsEvents';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import AnalyticsProvider from '../infra/AnalyticsProvider';
import { AddShoppingCart } from '@material-ui/icons';
import i18nService from '../services/i18nService';

const AnalyticsSection = ({ lang }) => {

  const classes = useStyles();
  const payNowTerm = i18nService.get(lang, 'pay_now') || 'Pay Now';
  
  const onClickBuyItNow = () => {
    const datanoew = (new Date()).toLocaleString();
    console.log('on click ', AnalyticsEvents.ClickBuyItNow, ', params=', datanoew);
    AnalyticsProvider.logEvent(AnalyticsEvents.ClickBuyItNow, { datanoew });
  };

  const onClickAddToCart = () => {
    const datanoew = (new Date()).toLocaleString();
    console.log('on click ', AnalyticsEvents.ClickAddToCart, ', params=', datanoew);
    AnalyticsProvider.logEvent(AnalyticsEvents.ClickAddToCart, { datanoew });
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Analytics"
          height="140"
          image="https://www.megalytic.com/hubfs/blog/direct%20traffic%20google%20analytics.png"
          title="Analytics"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Analytics
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Measure users behaviour
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          color="primary"
          onClick={onClickBuyItNow}
        >{payNowTerm}</Button>
        <Fab
          variant="extended"
          color="secondary"
          onClick={onClickAddToCart}
        >
          <AddShoppingCart />
          Add to Cart
            </Fab>
      </CardActions>
    </Card>
  )
}

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '350px'
  },
}));

export default AnalyticsSection;