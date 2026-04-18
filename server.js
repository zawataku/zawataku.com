import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/teapot', (req, res) => {
  res.status(418).sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const validRoutes = [
  '/',
  '/works',
];

app.get(validRoutes, (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});