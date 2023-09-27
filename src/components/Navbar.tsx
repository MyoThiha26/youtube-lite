import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: "0",
        justifyContent: "space-between",
      }}
    >
      <Link
        to={"/"}
        style={{ display: "flex", alignItems: "center", paddingLeft: "15px" }}
      >
        <img src={logo} alt="logo" width={"35px"} height={"40px"} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
