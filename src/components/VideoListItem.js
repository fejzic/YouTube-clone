import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import {DateTime} from 'luxon';
import HoverVideoPlayer from 'react-hover-video-player';



import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
  
    },
    components :{
        display:'flex',
        width:'100%',
        marginTop : '20px'
    },
    img: {
      height : '180px',
      width : '280px'
    },
    icone :{
        margin: '15px',
      },
    content:{
        margin: '6px',
    },
    date :{
        margin: '6px',
        
    },
    component:{
        display:'flex', 
        marginTop: '-25px',
        
    },
    componentP:{
        marginLeft : '35px',
        marginTop: '-15px',
    },
    titleComponent:{
        margin: '12px',
        lineClamp: 1,
        width : '200px',
        height:'60px',
        textOverflow : 'ellipsis'
    },
    compere:{
        flexWrap: 'wrap',
    }
  });

 const VideoListItem = ({video}) => {
     const classes = useStyles();
     const createdDate = DateTime.fromISO(video.createdAt);
     const videoSrc = video.url
     const test = (label) =>{
        return Math.abs(Number(label)) >= 1.0e+9
        ? Math.abs(Number(label)) / 1.0e+9 + "B"
    // Six Zeroes for Millions 
    : Math.abs(Number(label)) >= 1.0e+6

    ? Math.abs(Number(label)) / 1.0e+6 + "M"
    // Three Zeroes for Thousands
    : Math.abs(Number(label)) >= 1.0e+3

    ? Math.abs(Number(label)) / 1.0e+3 + "K"

    : Math.abs(Number(label));

    }
    return (
        <div className={classes.content}>
            
           <HoverVideoPlayer  
           key={videoSrc}
           videoSrc={videoSrc}
           style={{
            
            width: "280px",
            height: "200px",
            objectFit: "cover",
           }}
             
           pausedOverlay={
        <img
          src={video.thumbnail}
          alt=""
          style={{
            width: "280px",
            height: "180px",
            objectFit: "cover",
           }}/>}
           ></HoverVideoPlayer>
           
             <div className={classes.compere}>
             <div className={classes.components}>
             <Avatar alt={video.userId} />
             <h3 className={classes.titleComponent}>{video.title} </h3>
             </div>
             <div className={classes.componentP}>
                 <p className={classes.icone}>{video.userId}</p>
                 <div className={classes.component}>
                     <p className={classes.icone} >{test(video.views)} views </p>
                     <p className={classes.icone}>{createdDate.toRelativeCalendar()}</p>
                 </div>
             </div>
             </div>
              
        </div>
    )
}
export default VideoListItem
