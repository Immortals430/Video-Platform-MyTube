import { NextFunction, Request, Response } from "express";
import VideoRepository from "./video_repository.js";
import { fetchYoutubeVideos } from "../../utils/fetch_youtube_data.js";


export default class VideoController {
  videoRepository;
  constructor() {
    this.videoRepository = new VideoRepository();
  }

  async getHomeVideo(req: Request, res: Response, next: NextFunction) {
    let limit = 8;
    let page = 1;
    let skip = (page - 1) * limit;

    try {
      let videos = await this.videoRepository.getVideos(limit, skip);
      res.status(200).json({
        success: true,
        data: videos,
        message: "Videos fetched successfully",
      });
    } catch (err) {
      next(err);
    }
  }

  async getVideoSuggestion(req: Request, res: Response, next: NextFunction) {
    const searchQuery = req.params.searchQuery;
    try {
      const response = await fetchYoutubeVideos(searchQuery);

      res.status(200).json({
        success: true,
        data: response,
        message: "Videos fetched successfully",
      });

    } catch (err) {
      next(err);
    }
  }
}
