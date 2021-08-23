import { makeAutoObservable } from "mobx";
import { searchVideos } from "../api/VideoSearchApi";

class VideoSearchStore {
  rootStore = null;
  videoList = [];
  categorieList = [];

  offset=0;
  limit=5;
  q;
  duration="";
  order="";

  setVideoList(videos) {
    this.videoList = videos;
  }

  async loadVideos(queryParams) {
    try {
      this.q = queryParams.get("q");
      this.limit = this.limit;
      this.offset = 0;
      this.duration = queryParams.get("duration");
      this.order = queryParams.get("order");
      const videos = await searchVideos(this.q, this.offset, this.limit, this.duration, this.order);
      this.setVideoList(videos);
    } catch (e) {
      console.log(e);
    }
  }

  async loadMoreVideos(queryParams) {
    try {
      //this.limit = Number.parseInt(queryParams.get("limit")) || this.limit;
      //this.offset = Number.parseInt(queryParams.get("offset")) || 0;
      
      


      this.limit = this.limit;
      this.offset = this.offset + this.limit;
      this.duration = queryParams.get("duration");
      this.order = queryParams.get("order");

      const videos = await searchVideos(this.q, this.offset, this.limit, queryParams.get("duration"), queryParams.get("order"));
      this.setVideoList([...this.videoList, ...videos]);
    } catch (e) {
      console.log(e);
    }
  }

  async filterVideos(queryParams) {
    try {
      //this.limit = Number.parseInt(queryParams.get("limit")) || this.limit;
      //this.offset = Number.parseInt(queryParams.get("offset")) || 0;
      this.limit = this.limit;
      this.offset = 0;
      this.duration = queryParams.get("duration") || this.duration;

      const videos = await searchVideos(this.q, this.offset, this.limit, this.duration, this.order);
      this.setVideoList(videos);

    } catch (e) {
      console.log(e);
    }
  }

  async sortVideos(queryParams) {
    try {
      //this.limit = Number.parseInt(queryParams.get("limit")) || this.limit;
      //this.offset = Number.parseInt(queryParams.get("offset")) || 0;
      this.limit = this.limit;
      this.offset = 0;
      this.order = queryParams.get("order") || this.order;

      const videos = await searchVideos(this.q, this.offset, this.limit, this.duration, this.order);
      this.setVideoList(videos);

    } catch (e) {
      console.log(e);
    }
  }

  constructor(rootStore) {
    makeAutoObservable(this, { rootStore: false }, { autoBind: true });
    this.rootStore = rootStore;
  }
}
export default VideoSearchStore;
