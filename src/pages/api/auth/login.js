import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
      try {
        const account = await prisma.account.findUnique({
          where: { username },
        });
        if (account && account.password === password) {
          res.status(200).json(account);
        } else {
          res.status(401).json({ error: 'Invalid credentials' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
      }
    } if (req.method === 'GET') {
        try {
          const accounts = await prisma.account.findMany();
          res.status(200).json(accounts);
        } catch (error) {
          res.status(500).json({ error: 'Unable to fetch accounts' });
        }
      } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
      }
  }
  