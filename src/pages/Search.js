import React from "react";
import AppBar from "../components/AppBar";
import SearchVideoList from "../components/videos/SearchVideoList";
import { makeStyles } from "@material-ui/core/styles";
import FilterListIcon from "@material-ui/icons/FilterList";
import { useState } from "react";
import SearchFilter from "../components/searchFilter/SearchFilter";
import { Button } from "@material-ui/core";
import SideBar from '../components/SideBar';
import SideBarRow from '../components/SideBarRow';
import { useTheme } from '@material-ui/core/styles';
const drawerWidth = 200;

const useStyles = makeStyles((theme)=>({
  root: {
    marginTop: "7%",
    paddingLeft: "2%",
  },
  underlineFilter:{
    borderBottom: "1px solid #e0e0e0",

  },
  filterName:{
    font: "14px Roboto",
    fontFamily: "Roboto, Arial, sans-serif",
    color: "#606060",
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
}));

const Search = () => {
  const search = useStyles();
  const [showFilter, setshowFilter] = useState(false);
  const [showSideBar, setshowSideBar] = useState(false);
  const classes = useStyles();
  


  return (
    <div className={search.root}>
      <AppBar onClick = {( ) => setshowSideBar(!showSideBar)} showSideBar={showSideBar}/>
      {!showSideBar ? <SideBar/> : <SideBarRow/>}
      <div className={showSideBar ? classes.shiftTextRight : classes.shiftTextLeft}>
      <div className={search.underlineFilter}>
      <Button onClick={() => {setshowFilter(!showFilter)}}><FilterListIcon /><h3 className={search.filterName}>FILTER</h3></Button>
        {showFilter && <SearchFilter />}
      </div>
        <SearchVideoList />

    </div>
    </div>
  );
};

export default Search;
