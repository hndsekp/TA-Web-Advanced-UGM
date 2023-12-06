import pool from "../../../../utils/db";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { product_image, product_name, product_detail, product_price } = req.body;

    try {
      const result = await pool.query(
        'INSERT INTO products (product_image, product_name, product_detail, product_price) VALUES ($1, $2, $3, $4) RETURNING *',
        [product_image, product_name, product_detail, product_price]
      );

      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error inserting into database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}