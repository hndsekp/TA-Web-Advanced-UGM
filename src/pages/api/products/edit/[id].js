import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const { product_image, product_name, product_detail, product_price } = req.body;
    try {
      const product = await prisma.product.update({
        where: { id: parseInt(id, 10) },
        data: { product_image, product_name, product_detail, product_price },
      });
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  } else {
    res.setHeader('Allow', ['PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}