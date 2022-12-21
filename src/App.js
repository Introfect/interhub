import React from 'react';
import { Typography, AppBar } from '@material-ui/core';
import Notifications from './components/Notifications';
import Options from './components/Options';
import VideoPlayer from './components/VideoPlayer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 12,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: '2px solid black',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  
    back:{
      background: 'black',
      height: '100%',
    }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.back}>

    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">InterHub</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
        
    </div>
    </div>
  );
}

export default App;
