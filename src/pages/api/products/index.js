/*import pool from "../../../../utils/db";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM products');
      const data = result.rows.map(row => ({
        ...row,
        product_image: row.product_image.toString("base64"),
      }));
      res.status(200).json(data);
    } catch (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}*/