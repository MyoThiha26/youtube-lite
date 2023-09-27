import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Box sx={{ backgroundColor: "#000" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />}></Route>
            <Route path="/video/:id" element={<VideoDetail />}></Route>
            <Route path="/channel/:id" element={<ChannelDetail />}></Route>
            <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
          </Routes>
        </Box>
      </Router>
    </div>
  );
}

export default App;
