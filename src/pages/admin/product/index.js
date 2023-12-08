import cx from "clsx";
import { useState, useEffect } from "react";
import { Button, ScrollArea, Table } from "@mantine/core";
import classes from "./product.module.css";
import { DashboardLayout } from "@/layouts/dashboard";
import { IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Product() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/products");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const rows = data.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.id}</Table.Td>
      <Table.Td>
        <Image
          src={`data:image/png;base64,${row.product_image}`}
          alt={`Product ${row.product_name}`}
          className={classes.productImage}
          width={100}
          height={100}
        />
      </Table.Td>
      <Table.Td>{row.product_name}</Table.Td>
      <Table.Td>{row.product_detail}</Table.Td>
      <Table.Td>
        {row.product_price}
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
      <div className={classes.titleContainer}>
        <h2>Product</h2>
        <Button
          onClick={() => router.push("/admin/product/add")}
          className={classes.addButton}
        >
          <IconPlus stroke={2} />
          Add Product
        </Button>
      </div>
      <div className={classes.tableContainer}>
        <ScrollArea
          h={300}
          onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        >
          <Table miw={700}>
            <Table.Thead
              className={cx(classes.header, { [classes.scrolled]: scrolled })}
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
}

Product.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
