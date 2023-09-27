import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Item as Video } from "../types/videoTypes";
import {
  demoVideoUrl,
  demoThumbnailUrl,
  demoChannelTitle,
  demoChannelUrl,
  demoVideoTitle,
} from "../utils/constants";
import { Link } from "react-router-dom";

interface Props {
  video: Video;
  width?: "90%";
}

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
  width,
}: Props) => {
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          component="img"
          alt={snippet.title}
          src={snippet?.thumbnails?.high?.url}
          sx={{ borderRadius: "10px", height: { xs: "250px", md: "200px" } }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "transparent", height: "106px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="body2" fontWeight="bold" color="#fff">
            {snippet.title.length > 60
              ? snippet.title.slice(0, 60) + "..."
              : snippet.title}
          </Typography>
        </Link>
        <Link
          to={
            snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl
          }
        >
          <Typography
            variant="body2"
            color="gray"
            marginTop="5px"
            sx={{ ":hover": { color: "#fff" } }}
          >
            {snippet.channelTitle.length > 60
              ? snippet.channelTitle.slice(0, 60) + "..."
              : snippet.channelTitle}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
