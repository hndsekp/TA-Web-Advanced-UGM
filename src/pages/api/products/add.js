import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { imageUrl, name, detail, price } = req.body;
    try {
      const product = await prisma.product.create({
        data: {
          product_image: imageUrl,
          product_name: name,
          product_detail: detail,
          product_price: price,
        },
      });
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Unable to create product' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
