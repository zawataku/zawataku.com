import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'dist')));

// 1. WorksのAPI
app.get('/api/works', async (req, res) => {
  try {
    const limit = req.query.limit || 50;
    const response = await fetch(`https://zawataku-com.microcms.io/api/v1/works?limit=${limit}`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY
      }
    });

    if (!response.ok) throw new Error(`microCMS Error: ${response.status}`);

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch works data' });
  }
});

// 2. NewsのAPI
app.get('/api/news', async (req, res) => {
  try {
    const limit = req.query.limit || 10;
    const response = await fetch(`https://zawataku-com.microcms.io/api/v1/news?limit=${limit}`, {
      headers: {
        'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY
      }
    });

    if (!response.ok) throw new Error(`microCMS Error: ${response.status}`);

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch news data' });
  }
});

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

app.get(/.*/, (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});