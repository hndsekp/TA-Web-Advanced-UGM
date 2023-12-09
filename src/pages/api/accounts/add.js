import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, password, role } = req.body;
    try {
      const account = await prisma.account.create({
        data: {
          username: name,
            password: password,
            role: role,
        },
      });
      res.status(201).json(account);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create account' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
