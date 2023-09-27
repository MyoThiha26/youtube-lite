import { Box, Stack, Typography } from "@mui/material";
import { Item as Channel } from "../types/channelTypes";

interface Props {
  channel: Channel | null;
}

const kFormatter = (num: number | undefined) => {
  if (!num) {
    return;
  }
  return Math.abs(num) > 999
    ? Math.sign(num) * parseInt((Math.abs(num) / 1000).toFixed(1)) + "k"
    : Math.sign(num) * Math.abs(num);
};

const ChannelCard = ({ channel }: Props) => {
  return (
    <Stack display={"flex"} gap={2} flexDirection={"row"} mb={2}>
      <Box>
        <img
          src={channel?.snippet.thumbnails.high.url}
          alt="channel-profile"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
      </Box>
      <Box>
        <Typography variant="h5" color={"#fff"}>
          {channel?.snippet.title}
        </Typography>
        <Typography
          color={"grey"}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: "0", md: 2 },
          }}
        >
          <p>{channel?.snippet.customUrl}</p>
          <p>
            {kFormatter(
              parseInt(channel?.statistics.subscriberCount as string)
            )}
            &nbsp; subscribers
          </p>
          <p>
            {kFormatter(parseInt(channel?.statistics.videoCount as string))}{" "}
            videos
          </p>
        </Typography>
        <Typography color={"grey"}>
          <p>{channel?.snippet.description}</p>
        </Typography>
      </Box>
    </Stack>
  );
};

export default ChannelCard;
