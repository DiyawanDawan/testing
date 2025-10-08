import express from 'express';
const app = express();

// Middleware logging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Route utama
app.get('/', (req, res) => {
  res.send('🚀 Express Docker Testing di localhost:3000');
});

export default app;

// Jalankan server hanya jika bukan mode test
if (process.env.NODE_ENV !== 'test') {
  const PORT = 3000;
  const HOST = '0.0.0.0';
  app.listen(PORT, HOST, () => {
    console.log(`Server jalan di http://${HOST}:${PORT}`);
  });
}
