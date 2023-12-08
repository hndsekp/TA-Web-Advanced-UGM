import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
  user: 'postgres',
  host: 'localhost',
  database: 'db_lolycones',
  password: 'postgres',
  port: 5432,
});

export default pool;
