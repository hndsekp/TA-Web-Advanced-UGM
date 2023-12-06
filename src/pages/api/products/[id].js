import pool from "../../../../utils/db";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error querying database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'PUT') {
    const updatedProduct = req.body;

    try {
      const result = await pool.query(
        'UPDATE products SET product_image = $1, product_name = $2, product_detail = $3, product_price = $4 WHERE id = $5 RETURNING *',
        [updatedProduct.product_image, updatedProduct.product_name, updatedProduct.product_detail, updatedProduct.product_price, id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Error updating database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.status(204).end();
    } catch (error) {
      console.error('Error deleting from database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
