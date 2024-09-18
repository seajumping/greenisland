// api/sync.js

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // 假設您要處理 POST 請求
        // 您可以在此處添加處理邏輯
        const data = req.body;

        // 返回成功響應
        res.status(200).json({ message: 'Data received', data });
    } else {
        // 如果不是 POST 請求，返回 405 錯誤
        res.status(405).json({ error: 'Method not allowed' });
    }
}

