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
import classes from "./login.module.css";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", { username, password });
      const user = response.data;

      if (user.role === "USER") {
        router.push("/product");
      } else if (user.role === "ADMIN") {
        router.push("/admin");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <form onSubmit={handleLogin}>
      <div className={classes.container}>
        <Container size={420} my={40}>
          <Title ta="center" className={classes.title}>
            Welcome to Lolycones
          </Title>
          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput
              label="Username"
              placeholder="Your Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className={classes.buttonsi} fullWidth mt="xl">
              Sign in
            </Button>
            <Text c="dimmed" size="sm" ta="center" mt={5}>
              {"Don't have an account? "}
              <Link href="/auth/signup">
                <Anchor
                  className={classes.createsi}
                  size="sm"
                  ta="center"
                  component="button"
                >
                  Create account
                </Anchor>
              </Link>
            </Text>
          </Paper>
        </Container>
      </div>
    </form>
  );
}
