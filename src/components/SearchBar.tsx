import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleOnSubmit = (e: React.FormEvent | undefined) => {
    if (!e || !searchTerm) {
      return;
    }
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  return (
    <Paper
      component={"form"}
      onSubmit={(e) => {
        handleOnSubmit(e);
      }}
      sx={{ borderRadius: "15px", pl: 2, mr: { sm: 5 } }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "black" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
