import cx from "clsx";
import { useState } from "react";
import { ScrollArea, Table } from "@mantine/core";
import classes from "./product.module.css";

const data = [
  {
    id: "1",
    product: "Ice Cream 1",
    detail: "lorem ipsum dolor sit amet",
    price: "$10",
  },
  {
    id: "2",
    product: "Ice Cream 2",
    detail: "lorem ipsum dolor sit amet",
    price: "$10",
  },
  {
    id: "3",
    product: "Ice Cream 3",
    detail: "lorem ipsum dolor sit amet",
    price: "$10",
  },
];

export default function productTables() {
  const [scrolled, setScrolled] = useState(false);
  const rows = data.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.id}</Table.Td>
      <Table.Td>{row.product}</Table.Td>
      <Table.Td>{row.detail}</Table.Td>
      <Table.Td>{row.price}</Table.Td>
    </Table.Tr>
  ));
  return (
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
              <Table.Th>Product</Table.Th>
              <Table.Th>Detail</Table.Th>
              <Table.Th>Price</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </ScrollArea>
    </div>
  );
}
