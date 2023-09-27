import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import ReactPlayer from "react-player";
import { Item as VideoDetailType } from "../types/videoDetailTypes";
import { Item as Video } from "../types/videoTypes";
import Videos from "./Videos";

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState<VideoDetailType | null>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    fetchFromApi(`videos?p=snippet,statistics&id=${id}`).then((data) => {
      setVideoDetail(data.items[0] as VideoDetailType);
    });
    fetchFromApi(`search?p=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => {
        setVideos(data.items as Video[]);
      }
    );
    window.scrollTo(0, 0);
  }, [id]);

  if (!videoDetail?.snippet) return <h1>Loading ...</h1>;

  return (
    <Box minHeight={"95vh"}>
      <Stack direction={{ xs: "column", md: "row" }} pl={2}>
        <Box width={{ md: "75%", xs: "100%" }}>
          <Box sx={{ mb: "10px" }}>
            <ReactPlayer
              style={{ width: "100%" }}
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
          </Box>
          <Typography variant="h6" color={"#fff"}>
            {videoDetail?.snippet.title}
          </Typography>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Videos videos={videos} direction="column" width="90%" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
