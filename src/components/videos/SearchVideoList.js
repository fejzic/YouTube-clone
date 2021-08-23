import React from "react";
import useStores from "../../hooks/useStores";
import SearchVideoListItem from "./SearchVideoListItem";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { makeStyles } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
  loadMoreButton: {
    textAlign: "center",
    margin: "theme.spacing.unit",
  },

  button: {
    marginTop: "20px",
    marginBottom: "15px"
  }
});

function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

const SearchVideoList = () => {
  const history = useHistory();
  const { videoSearchStore } = useStores();
  const queryParams = useQueryParams();
  const videoList = useStyles();

  useEffect(() => {
    videoSearchStore.loadVideos(queryParams);
  }, []);

  const onLoadMore = () => {
    history.push({ search: queryParams.toString() });
    videoSearchStore.loadMoreVideos(queryParams);
  };

  return (
    <div>
      {videoSearchStore.videoList.map((video) => {
        return <SearchVideoListItem key={video.id} id={video.id} v={video} />;
      })}
      <div className={videoList.loadMoreButton}>
        <Button className={videoList.button} variant="outlined" onClick={onLoadMore}>
          Load more
        </Button>
      </div>
    </div>
  );
};

export default observer(SearchVideoList);
