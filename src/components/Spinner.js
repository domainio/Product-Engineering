import React from 'react';
// import { CircularProgress } from '@material-ui/core';
import Img from '../assets/pizza_loader.gif'

const Spinner = () => {
  return (
    <div style={Styles.img}>
      <img src={Img} />
    </div>
  )
  // return <CircularProgress />
};

const Styles = {
  img: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  }
}

export default Spinner;