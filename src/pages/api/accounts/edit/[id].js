import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { username, password, role } = req.body;
    try {
      const account = await prisma.account.update({
        where: { id: parseInt(id, 10) },
        data: { username, password, role },
      });
      res.status(200).json(account);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update account' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}