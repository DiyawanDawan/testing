import express from 'express';
const app = express();

// Tambahkan middleware logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    next();
});


// Route root
app.get('/', (req, res) => {
  res.send('🚀 Express Docker Testing di localhost');
});

// Bind ke localhost dengan port 4000
const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log(`Server jalan di http://${HOST}:${PORT}`);
});
