// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Mock database (replace with a real DB like MongoDB later)
let followers = {};

app.use(express.json());

// Get follower count for a user
app.get('/followers/:userId', (req, res) => {
  const userId = req.params.userId;
  res.json({ followers: followers[userId] || 0 });
});

// Update follower count (for testing)
app.post('/followers/:userId', (req, res) => {
  const userId = req.params.userId;
  followers[userId] = req.body.followers;
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});