const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example endpoint for products
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Guitar', price: 299 },
    { id: 2, name: 'Piano', price: 499 }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
