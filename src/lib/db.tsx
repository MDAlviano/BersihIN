import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'BersihIN',
  password: 'hikaru',
  port: 5432,
});

export const query  = (text: string, params?: never[]) => pool.query(text, params);