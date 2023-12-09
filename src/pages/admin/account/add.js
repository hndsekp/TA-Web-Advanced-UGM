import {
  TextInput,
  PasswordInput,
  NativeSelect,
  Box,
  Button,
  Group,
} from "@mantine/core";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default function AddAccount({ onAccountAdded }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/accounts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        password: password,
        role: role,
      }),
    });

    if (response.ok) {
      console.log("Account added successfully");
      onAccountAdded();
    } else {
      console.error("Failed to add account");
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
            />
            <PasswordInput
              id="accountPasswordInput"
              mt="md"
              label="Account Password"
              placeholder="Account Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <NativeSelect
              label="Account Role"
              mt="md"
              data={["ADMIN", "USER"]}
              onChange={(e) => setRole(e.target.value)}
            />
          </Box>
          <Group justify="flex-end" mt="md">
            <Button mt="xl" variant="filled" type="submit">
              Input Account
            </Button>
          </Group>
        </Box>
      </form>
    </>
  );
}
