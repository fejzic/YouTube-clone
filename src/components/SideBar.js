
import React from 'react';
import { observer } from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

const drawerWidth = 240;

const sideLeft = makeStyles({
    root:{
        margin : '5% 0 0 0',
       
        
      
    },
  
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
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




const SideBar= () => {
    const classes = useStyles();
    const sideBarLeft = sideLeft();
    const theme = useTheme();
    const itemList = [
    {
        text : 'Home',
        icone: <HomeIcon />
    },
    {
        text : 'Explore',
        icone: <ExploreIcon/>
    }
    ,
    {
        text : 'Subscription',
        icone: <SubscriptionsIcon />
    },
    {
        text : 'Library',
        icone: <VideoLibraryIcon />
    },
]
  const [open, setOpen] = React.useState(false);

 
    return (
        
        <div className = {sideBarLeft.root}>
         <CssBaseline />   
            <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            
            [classes.drawerClose]: !open,
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
        
      </Drawer>
      
           
        </div>
    )
}

export default observer(SideBar);