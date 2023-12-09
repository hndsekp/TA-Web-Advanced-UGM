import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
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
