import './App.css';

import React from 'react';
import LoginDialog from './components/LoginDialog'
import AppHeader from './components/AppHeader'
import AppDrawer from './components/AppDrawer'
import {Switch} from 'react-router-dom'
import Routes from './Routes'


function App() {
  const [displayLoginDialog, setDisplayLoginDialog] = React.useState(false);
  const [displayMenuDrawer, setDisplayMenuDrawer] = React.useState(false);

  const handleAppHeaderClicked = (btnName) => {
    if (btnName === 'login') {
      console.log("Login");
      setDisplayLoginDialog(true);
    } else if (btnName === 'drawer') {
      console.log("Drawer button clicked");
      toggleMenuDrawer();
    } else {
      console.log("Unknown button clicked");
    }
  };

  const dismissDialog = (results) => {
    console.log("Dialog dismissed: " + JSON.stringify(results));
    setDisplayLoginDialog(false);
  };

  const toggleMenuDrawer = () => {
    setDisplayMenuDrawer(!displayMenuDrawer);
  };

  return (
    <div className="App">
      <AppHeader buttonClicked={handleAppHeaderClicked}></AppHeader>
      <AppDrawer open={displayMenuDrawer} toggleDrawer={toggleMenuDrawer}></AppDrawer>
      <Switch>
        <Routes></Routes>
      </Switch>
      <LoginDialog displayLoginDialog={displayLoginDialog} dialogDismissed={dismissDialog}></LoginDialog>

    </div>
  );
}

export default App;
