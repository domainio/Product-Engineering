import React from 'react';
import { Select, MenuItem } from '@material-ui/core';
import AnalyticsProvider from '../infra/AnalyticsProvider';
import AnalyticsEvents from '../consts/AnalyticsEvents';

const LangSelect = ({ onChange, lang }) => {
  console.log('lang = ', lang);
  return (
    <div>
      <div style={Styles.container}>
        <span style={Styles.text}>Language</span>
        <Select
          style={Styles.select}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          onChange={(e) => {
            AnalyticsProvider.logEvent(AnalyticsEvents.SelectLang, { lang });
            onChange(e.target.value)
          }}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'es'}>Espaniol</MenuItem>
        </Select>
      </div>
    </div>
  )
};

const Styles = {
  container: {
    width: '200px',
    borderRadius: 4,
    border: '1px double white',
    margin: 'auto',
    marginBottom: '20px'
  },
  border: {
    borderRadius: 4,
    border: '1px double white',
  },
  text: {
    color: 'white',
    marginRight: '20px',
  },
  select: {
    backgroundColor: 'lightskyblue',
    borderRadius: 4,
    border: '1px double #ced4da'
  }
};

export default LangSelect;