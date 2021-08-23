import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { DateTime } from "luxon";

const useStyles = makeStyles({
  root: {
    marginTop: "4%",
  },
  flexStyle: {
    display: "flex",
  },
  pictureStyle: {
    paddingRight: "15px",
  },
  detailsStyle: {
    margin: 0,
    padding: 0,
  },
  profileImg: {
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    marginRight: "2%",
  },
  title: {
    font: "18px Roboto",
    fontFamily: "Roboto, Arial, sans-serif",
    color: "#030303"
  },
  about: {
    font: "12px Roboto",
    fontFamily: "Roboto, Arial, sans-serif",
    color: "#606060"
  },
  profile: {
    paddingTop:"12px",
    paddingBottom:"12px",
  },
});


const SearchVideoListItem = ({ v }) => {
  const video = useStyles();
  const createdDate = DateTime.fromISO(v.created);

  return (
    <div className={[video.root, video.flexStyle].join(" ")}>
      <img src={v.image} width="360" height="200" className={video.pictureStyle}></img>
      <div className={video.about}>
        <h1 className={[video.detailsStyle, video.title].join(" ")}>{v.title}</h1>
        <p>{v.numOfViews} views {createdDate.toRelativeCalendar()}</p>
        <p className={[video.flexStyle, video.profile].join(" ")}>
          <img src={v.user.profileImage} alt="" className={video.profileImg} />
          {v.user.name}
        </p>
        <p>{v.numOfLikes}</p>
        <p>{v.description}</p>
        <p></p>
      </div>
    </div>
  );
};

export default SearchVideoListItem;
