import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';
import { query } from '@/lib/db';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password }: { email: string; password: string } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
      const result = await query('SELECT * FROM users WHERE email = $1', [email]);
      if (result.rows.length === 0) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const user = result.rows[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = jwt.sign({ id: user.id, username: user.username, email: user.email }, JWT_SECRET, {
        expiresIn: '1h',
      });

      res.status(200).json({ token, user: { username: user.username, email: user.email } });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error logging in' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
