import React, { useEffect } from "react";
import useStores from "../hooks/useStores";
import { observer } from "mobx-react-lite";
import VideoListItem from "./VideoListItem";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  components: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    textAlign: "center",
  },
});
function useQueryParams() {
  return new URLSearchParams(useLocation().search);
}

const VideoList = () => {
  const { videoStore } = useStores();
  const queryParams = useQueryParams();
  const classes = useStyles();

  useEffect(() => {
    videoStore.loadVideos(queryParams);
  }, []);

  const onLoadMore = () => {
    videoStore.loadMoreVideos(
      videoStore.limit,
      (videoStore.offset+videoStore.limit)
      
    );
  };

  return (
    <div>
      <div className={classes.components}>
        {videoStore.videoList.map((v, key) => (
          <VideoListItem key={key} video={v} />
        ))}
      </div>
      <div className={classes.button}>
        <Button variant="contained" color="primary" onClick={onLoadMore}>
          Load more
        </Button>
      </div>
    </div>
  );
};
export default observer(VideoList);
