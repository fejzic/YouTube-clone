import { makeAutoObservable } from 'mobx';
import { getAccessToken, setAccessToken, removeAccessToken } from '../utils/token';
import { getVideos, getCategories } from '../api/VideoApi';





        

class VideoStore{
    rootStore = null;
    videoList = [];
    category=null;
    offset = 0;
    limit = 5;
    title;
    
    
    categorieList = [];

    constructor(rootStore) {
        makeAutoObservable(this, { rootStore: false }, { autoBind: true });
        this.rootStore = rootStore;
      }
    
      setVideoList(videoList){
          this.videoList = videoList;
      }
      setCategoryList(categoryList){
          this.categorieList = categoryList;
      }

    async loadVideos(queryParams){
        try{
        this.category = parseInt(queryParams.get("category"));
        this.limit = 5;
        this.offset = 0;
        const videos = await getVideos(this.category,this.limit,this.offset); 
        this.setVideoList(videos.data.rows);        
    }catch(e){
        console.log(e);
        }
    }

    async loadMoreVideos(offset,limit){
        try{
            this.offset = this.offset+this.limit;
            this.limit = this.limit;
            const videos = await getVideos(this.category,this.limit,this.offset); 
            const video = videos.data.rows;
            this.setVideoList([...this.videoList, ...video]);
        }catch(e){
            console.log(e);
        }
    }

    
    


    async loadCategories(){

        try{
            const categorie = await getCategories();
            this.setCategoryList(categorie);
        }catch(e){
            console.log(e);

        }
        

    }



}
export default VideoStore;