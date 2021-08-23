import React from "react";

import AppBar from '../components/AppBar';
import SideBar from '../components/SideBar';
import VideoList from '../components/VideoList';
import VideoCategories from '../components/VideoCategories'
import {useState} from "react"


import { observer } from 'mobx-react-lite';


import { makeStyles } from '@material-ui/core/styles';
import SideBarRow from '../components/SideBarRow';
import { useTheme } from '@material-ui/core/styles';
const drawerWidth = 200;

const useStyles = makeStyles((theme)=>({
  
  container:{
    paddingTop : '100px',
  },

  lists:{
    marginBotton : '3%',
  },
  
  shiftTextLeft: {
    
    padding: theme.spacing(4),
    marginLeft: '0px',
    marginRight : '0px'
  },
  shiftTextRight: {
    
    padding: theme.spacing(2),
    marginLeft: drawerWidth,
  }
}))





const Home = () => {
  const [showSideBar, setshowSideBar] = useState(false);
  const classes = useStyles();
  const theme = useTheme();



  return ( 
    
    <div  >
      

    
      <AppBar onClick = {( ) => setshowSideBar(!showSideBar)} showSideBar={showSideBar}/>
      
     
      {!showSideBar ? <SideBar/> : <SideBarRow/>}
      
      
       
      <div className={showSideBar ? classes.shiftTextRight : classes.shiftTextLeft}>
      
      <VideoCategories className = {classes.lists}/>
      
      
      
      <VideoList />
      
      
      </div>
       
       
    </div>
    
  );
};

export default observer(Home) ;
