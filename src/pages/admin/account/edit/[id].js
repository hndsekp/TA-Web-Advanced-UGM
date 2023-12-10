import { useState, useEffect } from "react";
import {PrismaClient} from "@prisma/client";
import {
  Box,
  TextInput,
  PasswordInput,
  NativeSelect,
  Group,
  Button,
} from "@mantine/core";

const prisma = new PrismaClient();

export default function EditAccount({ account, onAccountEdited }) {
  const [name, setName] = useState(account ? account.username : '');
  const [password, setPassword] = useState(account ? account.password : '');
  const [role, setRole] = useState(account ? account.role : '');

  useEffect(() => {
    if (account) {
      setName(account.username);
      setPassword(account.password);
      setRole(account.role);
    }
  }, [account]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/accounts/edit/${account.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        password: password,
        role: role,
      }),
    });

    if (response.ok) {
      console.log("Account update successfully");
      onAccountEdited();
    } else {
      console.error("Failed to update account");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box maw={360} mx="auto" p="md">
          <Box maw={340}>
            <TextInput
              id="accountUsernameInput"
              mt="md"
              label="Account Username"
              placeholder="Account Username"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <PasswordInput
              id="accountPasswordInput"
              mt="md"
              label="Account Password"
              placeholder="Account Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <NativeSelect
              label="Account Role"
              mt="md"
              data={["ADMIN", "USER"]}
              onChange={(e) => setRole(e.target.value)}
              value={role}
            />
          </Box>
          <Group justify="flex-end" mt="md">
            <Button mt="xl" variant="filled" type="submit">
              Edit Account
            </Button>
          </Group>
        </Box>
      </form>
    </>
  );
}
export async function getServerSideProps({ params }) {
  let account;
  try {
    account = await prisma.account.findUnique({
      where: { id: parseInt(params.id, 10) },
    });
  } catch (error) {
    console.error('Error fetching account:', error);
  }
  return {
    props: {
      account: account ? JSON.parse(JSON.stringify(account)) : null,
    },
  };
}
