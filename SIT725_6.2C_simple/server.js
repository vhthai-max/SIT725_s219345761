const express = require('express');
const app = express();

app.use(express.json());

// Simple API endpoint (required by task)
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello SIT725' });
});

const PORT = 3001;

// Allow app to be tested without starting server
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;

