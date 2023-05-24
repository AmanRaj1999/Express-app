const express = require("express");
const app = express();

// Mock data for posts
const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
  // ... and so on, up to 20 posts
];

// Endpoint to get posts
app.get("/post", (req, res) => {
  res.json(posts);
});

// Start the server
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
