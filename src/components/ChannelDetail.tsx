import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Item as Channel } from "../types/channelTypes";
import { Item as Video } from "../types/videoTypes";
import { Box, Stack, Typography } from "@mui/material";
import ChannelCard from "./ChannelCard";
import { Feed, Sidebar, Videos } from ".";
import { demoProfilePicture } from "../utils/constants";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState<Channel | null>(null);
  const [channelVideos, setChannelVideos] = useState<Video[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data.items[0] as Channel);
    });
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setChannelVideos(data.items as Video[]);
      }
    );
  }, [id]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          px: { sx: 0, md: 2 },
          borderRight: "1px solid #3d3d3d",
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2023 M2M with Marin
        </Typography>
      </Box>
      <Box flex={2} sx={{ overflowY: "auto", height: "90vh" }}>
        <img
          src={
            channelDetail?.brandingSettings?.image?.bannerExternalUrl
              ? channelDetail?.brandingSettings?.image?.bannerExternalUrl
              : demoProfilePicture
          }
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
          }}
        />
        <Box p={2}>
          <ChannelCard channel={channelDetail} />
          <Videos videos={channelVideos} />
        </Box>
      </Box>
    </Stack>
  );
};

export default ChannelDetail;
