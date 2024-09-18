// api/sync.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // 處理 POST 請求
        const data = req.body;
        res.status(200).json({ message: 'Data received', data });
    } else if (req.method === 'GET') {
        // 處理 GET 請求
        res.status(200).json({ message: 'GET request received' });
    } else {
        // 如果不是支持的方法，返回 405 錯誤
        res.status(405).json({ error: 'Method not allowed' });
    }
}
