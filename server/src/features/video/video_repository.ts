import Video from "./video_schema.js";

export default class VideoRepository {
  async getVideos(limit : number, skip : number) {
    let videos = await Video.find({}).skip(skip).limit(limit);
    return videos
  }
}
