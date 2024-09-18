export default async function handler(req, res) {
  if (req.method === 'POST') {
    // 處理同步邏輯
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
