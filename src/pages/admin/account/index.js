import classes from "./account.module.css";
import cx from "clsx";
import { useEffect, useState } from "react";
import { Button, ScrollArea, Table, Modal } from "@mantine/core";
import { DashboardLayout } from "@/layouts/dashboard";
import { IconPlus, IconEdit, IconTrash } from "@tabler/icons-react";
import { PrismaClient } from "@prisma/client";
import AddAccount from "./add";
import EditAccount from "./edit/[id]";
import DeleteAccount from "./delete/[id]";

const Account = () => {
  const [accounts, setAccounts] = useState([]);
  const [scrolled, setScrolled] = useState(false);
  const [editingAccount, setEditingAccount] = useState(null);
  const [deletingAccount, setDeletingAccount] = useState(null);
  const [addModalOpened, setAddModalOpened] = useState(false);
  const [editModalOpened, setEditModalOpened] = useState(false);
  const [deleteModalOpenend, setDeleteModalOpened] = useState(false);

  // GET data to display
  const fetchAccounts = async () => {
    const response = await fetch("/api/accounts");
    const data = await response.json();
    setAccounts(data);
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  // Handle for open modal
  const handleOpenAddModal = () => {
    setAddModalOpened(true);
  };

  const handleOpenEditModal = (accountId) => {
    const accountToEdit = accounts.find((account) => account.id === accountId);
    setEditingAccount(accountToEdit);
    setEditModalOpened(true);
  };

  const handleOpenDeleteModal = (accountId) => {
    const accountToDelete = accounts.find((account) => account.id === accountId)
    setDeletingAccount(accountToDelete);
    setDeleteModalOpened(true);
  };

  // Handle after submit data
  const handleAccountAdded = () => {
    setAddModalOpened(false);
    fetchAccounts();
  };

  const handleAccountEdited = () => {
    setEditModalOpened(false);
    fetchAccounts();
  };

  const handleAccountDeleted = () => {
    setDeleteModalOpened(false);
    fetchAccounts();
  };

  const rows = accounts.map((account, index) => (
    <Table.Tr key={account.id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{account.username}</Table.Td>
      <Table.Td>{account.password}</Table.Td>
      <Table.Td>{account.role}</Table.Td>
      <Table.Td>
        <div className={classes.actionContainer}>
          <Button
            onClick={() => handleOpenEditModal(account.id)}
            className={classes.editButton}
          >
            <IconEdit size={18} />
          </Button>

          <Button
            onClick={() => handleOpenDeleteModal(account.id)}
            className={classes.deleteButton}
          >
            <IconTrash size={18} />
          </Button>
        </div>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Modal
        opened={addModalOpened}
        onClose={() => setAddModalOpened(false)}
        title="Add Account"
      >
        <AddAccount onAccountAdded={handleAccountAdded} />
      </Modal>
      <Modal
        opened={editModalOpened}
        onClose={() => setEditModalOpened(false)}
        title="Edit Account"
      >
        <EditAccount
          account={editingAccount}
          onAccountEdited={handleAccountEdited}
        />
      </Modal>
      <Modal
        opened={deleteModalOpenend}
        onClose={() => setDeleteModalOpened(false)}
        title="Delete Account"
        size="auto"
      >
        <DeleteAccount
          account={deletingAccount}
          onAccountDeleted={handleAccountDeleted}
        />
      </Modal>
      <div className={classes.titleContainer}>
        <h2>Account</h2>
        <Button onClick={handleOpenAddModal} className={classes.addButton}>
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
};

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const accounts = await prisma.account.findMany({
    select: {
      id: true,
      username: true,
      password: true,
      role: true,
    },
  });
  const serializedAccounts = JSON.parse(JSON.stringify(accounts));
  await prisma.$disconnect();
  return {
    props: {
      accounts: serializedAccounts,
    },
  };
}

Account.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default Account;
