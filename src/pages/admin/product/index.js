import classes from "./product.module.css";
import React, { useState, useEffect } from "react";
import { Button, ScrollArea, Table, Modal } from "@mantine/core";
import { IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";
import Image from "next/image";
import { DashboardLayout } from "@/layouts/dashboard";
import { useDisclosure } from "@mantine/hooks";
import AddProduct from "./add";
import { PrismaClient } from "@prisma/client";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);

  const fetchProducts = async () => {
    const response = await fetch('/api/products');
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductAdded = () => {
    close();
    fetchProducts();
  };

  const rows = products.map((product, index) => (
    <Table.Tr key={product.id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>
        <Image
          src={`${product.product_image}`}
          alt={`Product ${product.product_name}`}
          className={classes.productImage}
          width={100}
          height={100}
        />
      </Table.Td>
      <Table.Td>{product.product_name}</Table.Td>
      <Table.Td>{product.product_detail}</Table.Td>
      <Table.Td>
        {product.product_price}
        <span> $</span>
      </Table.Td>
      <Table.Td>
        <div className={classes.actionContainer}>
          <Button className={classes.editButton}>
            <IconEdit size={18} />
          </Button>
          <Button className={classes.deleteButton}>
            <IconTrash size={18} />
          </Button>
        </div>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add Product">
        <AddProduct onProductAdded={handleProductAdded} />
      </Modal>
      <div className={classes.titleContainer}>
        <h2>Product</h2>
        <Button onClick={open} className={classes.addButton}>
          <IconPlus stroke={2} />
          Add Product
        </Button>
      </div>
      <div className={classes.tableContainer}>
        <ScrollArea
          h="550"
          onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        >
          <Table h="100%" miw={700}>
            <Table.Thead
              className={classes.header}
              style={{ borderBottom: scrolled ? "1px solid #ccc" : "none" }}
            >
              <Table.Tr>
                <Table.Th>Id</Table.Th>
                <Table.Th>Image</Table.Th>
                <Table.Th>Product</Table.Th>
                <Table.Th>Detail</Table.Th>
                <Table.Th>Price</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody className={classes.body}>{rows}</Table.Tbody>
          </Table>
        </ScrollArea>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const products = await prisma.product.findMany({
    select: {
      id: true,
      product_image: true,
      product_name: true,
      product_detail: true,
      product_price: true,
    },
  });
  const serializedProducts = JSON.parse(JSON.stringify(products));
  await prisma.$disconnect();
return {
  props: {
    products: serializedProducts,
  },
};
}

Product.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Product;
