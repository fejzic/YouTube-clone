import search_videos from "./search_videos.json";
import Api from "./Api"


export const searchVideos = async (q, offset, limit, duration, order) => {
  try {
    //const { data } = await Api.get('/videos?q=' + q + "&size=" + limit + "&page=" + (offset / limit) + "&order=" + order + "&duration=" + duration);
    let data = search_videos;

    if (q) {
      data = data.filter(
        (video) =>
          video.title.indexOf(q) !== -1 || video.description.indexOf(q) !== -1
      );
    }
    if (duration) {
      switch (duration) {
        case "less4":
          data = data.filter((video) => video.duration < 4 * 60);
          break;
        case "between4and20":
          data = data.filter(
            (video) => video.duration >= 4 * 60 && video.duration < 20 * 60
          );
          break;
        case "more20":
          data = data.filter((video) => video.duration >= 20 * 60);
          break;
      }
    }
    if (order) {
      switch (order) {
        case "createdDate":
          data = data.sort((data1, data2) => {
            if (data1.created < data2.created) return -1;
            if (data1.created > data2.created) return 1;
            return 0;
          });
          break;

        case "numOfViews":
          data = data.sort((data1, data2) => {
            if (data1.numOfViews < data2.numOfViews) return 1;
            if (data1.numOfViews > data2.numOfViews) return -1;
            return 0;
          });
          break;
      }
    }

    data = data.slice(offset, limit + offset);
    return data;
  } catch (e) {
    throw e;
  }
};
