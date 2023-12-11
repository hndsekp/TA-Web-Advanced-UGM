import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import { useState } from "react";
import classes from "./signup.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export function Signup() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const role = "USER";

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
      router.push('/product')
    } else {
      console.error("Failed to add account");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={classes.container}>
          <Container size={420} my={40}>
            <Title ta="center" className={classes.title}>
              Welcome to Lolycones!
            </Title>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <TextInput
                label="Username"
                placeholder="Your Username"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                className={classes.buttonsi}
                fullWidth
                mt="xl"
                type="submit"
              >
                Sign Up
              </Button>
              <Text c="dimmed" size="sm" ta="center" mt={5}>
                Already have an account?{" "}
                <Link href="/auth/login">
                  <Anchor size="sm" ta="center" component="button">
                    Sign In
                  </Anchor>
                </Link>
              </Text>
            </Paper>
          </Container>
        </div>
      </form>
    </>
  );
}
