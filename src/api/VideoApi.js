import Api from './Api';





export const getVideos = async (category,limit,offset) => {
  
  
    try {
      
      let categoryParam = category ? ("&category=" + category) : "";
      const { data } = await Api.get('/videos?size='+limit+'&page='+(offset/limit)+categoryParam);
      
      return data;
    } catch (e) {
      throw e;
    }
  };

  export const getCategories = async () => {
  
    try {
     const { data } = await Api.get('/categories/');
     return data;
    } catch (e) {
      throw e;
    }
  };