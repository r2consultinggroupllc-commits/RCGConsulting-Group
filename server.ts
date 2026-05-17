import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  
  // Expose an endpoint that proxies the explicit GAS URL
  // We use process.env.GAS_URL, but fallback to the provided URL for ease of use
  const GAS_URL = process.env.GAS_URL || "https://script.google.com/macros/s/AKfycbxvEtBGSwkK9jbLjqB4ST5Vga80vy_QzLtobIZvvjjn9fW2LUhxJMqDJ57iDBfKBAxjoQ/exec";

  // API routes
  app.post("/api/submitContact", async (req, res) => {
    try {
      const response = await fetch(GAS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', 
        },
        body: JSON.stringify({
          action: 'submitContact',
          ...req.body
        }),
      });
      const data = await response.json();
      res.json(data);
    } catch (e: any) {
      res.status(500).json({ success: false, error: e.message || "Failed to fetch from backend" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
