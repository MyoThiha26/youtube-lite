import React from "react";
import { Item as Video } from "../types/videoTypes";
import { Box, Stack } from "@mui/material";
import { VideoCard } from ".";

interface Props {
  videos: Video[];
  direction?: "column";
  width?: "90%";
}

const Videos = ({ videos, direction, width }: Props) => {
  console.log(videos);
  return (
    <Stack direction={direction || "row"} flexWrap={"wrap"} gap={2}>
      {videos.map((video, idx) => {
        return (
          <Box
            key={idx}
            sx={{ width: width || { md: "30%", sm: "48%", xs: "100%" } }}
          >
            <VideoCard video={video} width={width} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
