import React from 'react'
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';
import HoverVideoPlayer from 'react-hover-video-player';

const useStyles = makeStyles({
        
    components :{
        display:'flex',
        margin : '0 10px'
    },
    conteiner:{
        width: '300px',
    }
})



 const VideoCategoryItem = ({category,onClick,isFilteredBy}) => {
     const classes = useStyles();
     const onClicked = ()=>{

         onClick(category)
     }
    return (
        <div className={classes.components} >
            <div >
             <Chip label={category.title} onClick={onClicked} color={isFilteredBy ? 'primary' : 'default'}  />
             </div>
            
        </div>
    )
}
export default VideoCategoryItem
