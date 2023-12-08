import cx from "clsx";
import { Button, ScrollArea, Table } from "@mantine/core";
import classes from "./account.module.css";
import { DashboardLayout } from "@/layouts/dashboard";
import { IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useState } from "react";

const data = [
  {
    id: "1",
    username: "admin",
    password: "admin",
    role: "admin",
  },
  {
    id: "2",
    username: "ranu",
    password: "sayasehat12",
    role: "customer",
  },
  {
    id: "3",
    username: "raph",
    password: "raphaelzelig00",
    role: "customer",
  },
];

export default function Account() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const rows = data.map((row) => (
    <Table.Tr key={row.id}>
      <Table.Td>{row.id}</Table.Td>
      <Table.Td>{row.username}</Table.Td>
      <Table.Td>{row.password}</Table.Td>
      <Table.Td>{row.role}</Table.Td>
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
        <h2>Account</h2>
        <Button
          onClick={() => router.push("/admin/account/add")}
          className={classes.addButton}
        >
          <IconPlus stroke={2} />
          Add Account
        </Button>
      </div>
      <div className={classes.tableContainer}>
        <ScrollArea
          h="550"
          onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        >
          <Table h="100%" miw={700}>
            <Table.Thead
              className={cx(classes.header, { [classes.scrolled]: scrolled })}
            >
              <Table.Tr>
                <Table.Th>Id</Table.Th>
                <Table.Th>Username</Table.Th>
                <Table.Th>Password</Table.Th>
                <Table.Th>Role</Table.Th>
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

Account.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
