import React,{useEffect,useRef,useState} from 'react'
import useStores from '../hooks/useStores';
import VideoCategoryItem from './VideoCategoryItem'
import { observer } from 'mobx-react-lite';
import { makeStyles } from '@material-ui/core/styles';
import {useLocation} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
        
    components :{
        display:'flex',
        
        marginBottom: '3%',
        margin : '20px'

    },
    conteiner:{
        display:'flex',
        overflowX: 'hidden',
        padding:'14px',
        willChange: 'transform',
        width:'100%',
        float: 'left',
        height:'60px',
        position:'relative',
        
    },
    buttonLeft:{
        

    },
    buttonRight:{
        marginLeft:'10px',
        transform: 'translateX(10px)',
        transitionDuration: '0.15s',
        transitionTimingFunction: 'cubic-bezier(0.05, 0, 0, 1)',
        
    }

})


function useQueryParams() {
    return new URLSearchParams(useLocation().search);
  }
 const VideoCategories = () => {
    const classes = useStyles();
    const queryParams = useQueryParams();
    const { videoStore } = useStores();
    const history = useHistory();
    const navRef = useRef();
    const [showingRight, setShowingRight] = useState(true);
    const [showingLeft, setShowingLeft] = useState(false);

    useEffect(()=>{
        videoStore.loadCategories(queryParams);
        
    },[])
    const onCategoryCliked = (category) =>{
        
        queryParams.set('category',category.id);
        history.push({search: queryParams.toString()}); 
        videoStore.loadVideos(queryParams);
        
    }
    const onAllCategoryCliked = (category) =>{
        
        
        queryParams.delete('category');

        console.log(queryParams);
        history.push({search: queryParams.toString()}); 
        videoStore.loadVideos(queryParams);
        
    }
    const handleNav = (direction)=>{
        
        if(direction ==='left'){
         
         setShowingRight(true);
         if(navRef.current.scrollLeft  <= 0){
            setShowingLeft(false);
        }
        else{
            navRef.current.scrollLeft -=200;
            setShowingLeft(true); 
        }
         
        }
        else{
            setShowingLeft(true);
            if(navRef.current.offsetWidth + navRef.current.scrollLeft >= navRef.current.scrollWidth){
                setShowingRight(false);
            }
            else{
                navRef.current.scrollLeft +=200;
                setShowingRight(true); 
            }
            
        }
        
    }
    return (
        
        <div className={classes.components}>
           {showingLeft && <IconButton onClick onClick={() => handleNav('left')}><ChevronLeftIcon/></IconButton>}
            <div ref={navRef} className={classes.conteiner}>
            
            <VideoCategoryItem category={{title:'All'} } onClick={onAllCategoryCliked} isFilteredBy={!videoStore.category}></VideoCategoryItem>
            {videoStore.categorieList.map((v, key)=>{
                
                return<VideoCategoryItem  key={key} category={v} onClick={onCategoryCliked} isFilteredBy={v.id===videoStore.category} />
                
   }  )} 
   </div>
           {showingRight && <IconButton  className ={classes.buttonRight} onClick onClick={() => handleNav('right')}><ChevronRightIcon/></IconButton >}
     </div>

    )
}
export default observer(VideoCategories)

