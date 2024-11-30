const express = require('express');
const cors = require('cors');
const path = require('path');

const routes = require('./routes/routes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

// Serve Frontend in Production
app.use(express.static(path.resolve(__dirname, '../../frontend/dist')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../frontend/dist/index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
