import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";
import useStores from "../../hooks/useStores";

const useStyles = makeStyles({
  root: {
    paddingRight: "32px",
    width: "19%",
    marginBottom: "2%"
  },
  flexDiv: {
    display: "flex",
  },

  title: {
    fontSize: "14px",
    borderBottom: "1px solid #e0e0e0",
  },
  buttonBlock: {
    display: "flex",
    flexDirection: "column",
  },
  buttonText: {
    justifyContent: "start",
    color:"#606060",
    fontSize: "13px",
    paddingLeft:"0"
  }

  
});

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

const SearchFilter = () => {
  const filter = useStyles();
  const { videoSearchStore } = useStores();
  const queryParams = useQueryParams();
  const history = useHistory();


  const sortByDate = () => {
    queryParams.set("order", "createdDate");
    history.push({ search: queryParams.toString() });
    videoSearchStore.sortVideos(queryParams);
  };

  const sortByViews = () => {
    queryParams.set("order", "numOfViews");
    history.push({ search: queryParams.toString() });
    videoSearchStore.sortVideos(queryParams);
  };

  const filterUnder4minutes = () => {
    queryParams.set("duration", "less4");
    history.push({ search: queryParams.toString() });
    videoSearchStore.filterVideos(queryParams);
  };

  const filterBetween4and20min = () => {
    queryParams.set("duration", "between4and20");
    history.push({ search: queryParams.toString() });
    videoSearchStore.filterVideos(queryParams);
  };

  const filterMoreThan20min = () => {
    queryParams.set("duration", "more20");
    history.push({ search: queryParams.toString() });
    videoSearchStore.filterVideos(queryParams);
  };

  return (
    <div className={filter.flexDiv}>
      <div className={filter.root}>
        <h4 className={filter.title}>Poredaj po</h4>
        <div className={filter.buttonBlock}>
          <Button className={filter.buttonText} onClick={sortByDate}>
            Datumu
          </Button>
          <Button className={filter.buttonText} onClick={sortByViews}>
            Broju pregleda
          </Button>
        </div>
      </div>
      <div className={filter.root}>
      <h4 className={filter.title}>Trajanje</h4>
        <div className={filter.buttonBlock}>
          <Button className={filter.buttonText} onClick={filterUnder4minutes}>
            Manje od 4 minute
          </Button>
          <Button
            className={filter.buttonText}
            onClick={filterBetween4and20min}
          >
            Od 4 do 20 minuta
          </Button>
          <Button className={filter.buttonText} onClick={filterMoreThan20min}>
            Više od 20 minuta
          </Button>
        </div>
      </div>
    </div>
  );
};

export default observer(SearchFilter);
