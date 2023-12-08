import pool from "../../../../utils/db";

export default async function handler(req, res) {
  try {
    const { rows } = await pool.query('SELECT * FROM products');

    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching data from database:', error);
    
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
