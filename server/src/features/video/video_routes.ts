import express from "express";
import VideoController from "./video_controller.js";
const videoRoutes = express.Router()
const videoController = new VideoController()

videoRoutes.get("/get-home-videos", (req, res, next) => {
    videoController.getHomeVideo(req, res, next)
})

videoRoutes.get("/get-video-suggestion/:searchQuery", (req, res, next) => {
    videoController.getVideoSuggestion(req, res, next)
})

export default videoRoutes