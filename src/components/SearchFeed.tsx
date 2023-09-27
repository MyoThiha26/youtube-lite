import { Stack, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { fetchFromApi } from "../utils/fetchFromApi";
import { Item as Video } from "../types/videoTypes";
import { Videos } from ".";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [videos, setVideos] = useState<Video[]>([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items as Video[]);
    });
  }, [searchTerm]);
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
      <Box p={2} flex={2} sx={{ overflowY: "auto", height: "90vh" }}>
        <Typography
          variant="h4"
          fontWeight={"bold"}
          sx={{ color: "#fff", marginBottom: 2 }}
        >
          Results for <span style={{ color: "#FC1503" }}>{searchTerm} </span>
          videos
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;
