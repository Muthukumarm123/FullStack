import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { ALL_TOPICS, TOPIC_MAP, searchTopics } from './src/content/index';
import { ROADMAP_STAGES } from './src/content/roadmap';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory progress cache (persists for session; client also syncs with localStorage)
let userProgressStore: Record<string, string> = {};

// --- API Endpoints ---

// 1. Get all topics summary
app.get('/api/topics', (req, res) => {
  const summary = ALL_TOPICS.map(t => ({
    id: t.id,
    slug: t.slug,
    title: t.title,
    technology: t.technology,
    techName: t.techName,
    category: t.category,
    subcategory: t.subcategory,
    shortDescription: t.shortDescription,
    estimatedMinutes: t.estimatedMinutes,
    breadcrumbs: t.breadcrumbs
  }));
  res.json(summary);
});

// 2. Get specific topic by ID
app.get('/api/topics/:id', (req, res) => {
  const topic = TOPIC_MAP.get(req.params.id);
  if (!topic) {
    return res.status(404).json({ error: 'Topic not found' });
  }
  res.json(topic);
});

// 3. Search topics
app.get('/api/search', (req, res) => {
  const query = (req.query.q as string) || '';
  const tech = (req.query.tech as string) || 'all';
  const results = searchTopics(query, tech);
  res.json(results);
});

// 4. Get roadmap stages
app.get('/api/roadmap', (req, res) => {
  res.json(ROADMAP_STAGES);
});

// 5. Progress endpoints
app.get('/api/progress', (req, res) => {
  res.json(userProgressStore);
});

app.post('/api/progress', (req, res) => {
  const { topicId, status } = req.body;
  if (topicId && typeof status === 'string') {
    userProgressStore[topicId] = status;
  }
  res.json({ success: true, progress: userProgressStore });
});

// --- Server Environment Routing ---
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`WebDev Learning Server running at http://localhost:${PORT}`);
  });
}

startServer();
