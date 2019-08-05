import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Product from './Components/Product';
import ProductListing from './Components/ProductListing';

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}


function App() {
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    console.log(newValue);
    setValue(newValue);
  }

  return (
    <div className="App">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Home" {...a11yProps(0)} />
        </Tabs>
      </AppBar>

      <header className="App-header">
      <ProductListing />
      </header>
    </div>
  );
}

export default App;
