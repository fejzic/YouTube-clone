import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import VideoLibrarySharpIcon from '@material-ui/icons/VideoLibrarySharp';
import ScheduleSharpIcon from '@material-ui/icons/ScheduleSharp';
import ThumbUpAltSharpIcon from '@material-ui/icons/ThumbUpAltSharp';
import MusicVideoRoundedIcon from '@material-ui/icons/MusicVideoRounded';
import SportsIcon from '@material-ui/icons/Sports';
import GamesIcon from '@material-ui/icons/Games';
import MovieIcon from '@material-ui/icons/Movie';
import YouTubeIcon from '@material-ui/icons/YouTube';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import SettingsIcon from '@material-ui/icons/Settings';
import ReportIcon from '@material-ui/icons/Report';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

const drawerWidth = 240;

const barR = makeStyles({
    root:{
        
        margin : '5% 0 0 0',
        
        
    
      
    },
    spacce : {
        justifyContent :'space-evenly'
    }
  
  });
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
   
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    
  }));


const SideBarRow = () => {
    const clas = barR();
    const classes = useStyles();
    const theme = useTheme();
    const itemList = [
    {
        text : 'Home',
        icone: <HomeIcon />
    },
    {
        text : 'Explore',
        icone: <ExploreIcon/>
    },
    {
        text : 'Subscription',
        icone: <SubscriptionsIcon/>
    }
    
]
const itemListTwo = [
    {
        text : 'Library',
        icone: <VideoLibraryIcon />
    },
    {
        text : 'History',
        icone: <HistoryIcon />
    },
    {
        text : 'Your Videos',
        icone: <VideoLibrarySharpIcon />
    },
    {
        text : 'Watch later',
        icone: <ScheduleSharpIcon />
    },
    {
        text : 'Liked videos',
        icone: <ThumbUpAltSharpIcon />
    },
]
const itemListTree = [
    {
        text : 'Music',
        icone: <MusicVideoRoundedIcon />
    },
    {
        text : 'Sports',
        icone: <SportsIcon />
    },
    {
        text : 'Gaming',
        icone: <GamesIcon />
    },
    {
        text : 'Movies',
        icone: <MovieIcon />
    },
]
const itemListFour = [
    {
        text : 'YouTube Premium',
        icone: <YouTubeIcon />
    },
    {
        text : 'Movies',
        icone: <MovieIcon />
    },
    {
        text : 'Gaming',
        icone: <GamesIcon />
    },
    {
        text : 'Live',
        icone: <ViewStreamIcon />
    },
    {
        text : 'Sports',
        icone: <SportsIcon />
    },
]
const itemListFive = [
    {
        text : 'Settings',
        icone: <SettingsIcon />
    },
    {
        text : 'Report history',
        icone: <ReportIcon />
    },
    {
        text : 'Help',
        icone: <HelpIcon />
    },
    {
        text : 'Send feedback',
        icone: <FeedbackIcon />
    },
    
]
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return (
        <div className={clas.root}>
            <CssBaseline />   
            <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          
            [classes.drawerOpen]: open,
        })}
        classes={{
          paper: clsx({
            
            [classes.drawerOpen]: open,
          }),
        }}
       
      >
        <div className={classes.toolbar}>
          
        </div>
        <Divider />
        <List>
          {itemList.map((item, index) => {
              const {text,icone} =item;
              return (
            <ListItem button key={text}>
              {icone &&<ListItemIcon>{icone}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
              );
              })}
        </List>
        <Divider />
        <List>
          {itemListTwo.map((item, index) => {
              const {text,icone} =item;
              return (
            <ListItem button key={text}>
              {icone &&<ListItemIcon>{icone}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
              );
              })}
        </List>
        <Divider />
        <List>
            <h4>SUBSCRIPTIONS</h4>
          {itemListTree.map((item, index) => {
              const {text,icone} =item;
              return (
            <ListItem button key={text}>
              {icone &&<ListItemIcon>{icone}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
              );
              })}
        </List>
        <Divider />
        <List>
            <h4>MORE FROM YOUTUBE</h4>
          {itemListFour.map((item, index) => {
              const {text,icone} =item;
              return (
            <ListItem button key={text}>
              {icone &&<ListItemIcon>{icone}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
              );
              })}
        </List>
        <Divider />
        <List>
          {itemListFive.map((item, index) => {
              const {text,icone} =item;
              return (
            <ListItem button key={text}>
              {icone &&<ListItemIcon>{icone}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
              );
              })}
        </List>
        
      </Drawer>
      

        </div>
    )
}

export default observer(SideBarRow)
