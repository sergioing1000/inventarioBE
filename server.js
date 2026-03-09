const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);


app.use(express.json());

// Sample inventory data
const inventario = [
  { id: 1, producto: "Laptop", cantidad: 10 },
  { id: 2, producto: "Mouse", cantidad: 50 },
  { id: 3, producto: "Teclado", cantidad: 30 }
];

// GET endpoint
app.get('/api/inventario', (req, res) => {
  res.status(200).json({
    success: true,
    data: inventario
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
