export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  const GAS_URL = process.env.GAS_URL || "https://script.google.com/macros/s/AKfycbxvEtBGSwkK9jbLjqB4ST5Vga80vy_QzLtobIZvvjjn9fW2LUhxJMqDJ57iDBfKBAxjoQ/exec";

  try {
    const response = await fetch(GAS_URL, {
      method: req.method,
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify({
        action: 'submitContact',
        ...req.body
      }),
    });
    const data = await response.json();
    return res.status(200).json(data);
  } catch (e: any) {
    return res.status(500).json({ success: false, error: e.message || "Failed to fetch from backend" });
  }
}
