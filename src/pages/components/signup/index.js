import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./signup.module.css";
import Link from "next/link";

export function Signup() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome to Lolycones!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Username" placeholder="Your Username" required/>
        <PasswordInput
          
          label="Password"
          placeholder="Your password"
          required
          
        />
        <Button className={classes.buttonsi} fullWidth mt="xl">
          Sign Up
        </Button>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Already have an account?{" "}
          <Link href="/auth/login">
          <Anchor  size="sm" ta="center" component="button">
            Sign In 
          </Anchor>
          </Link>
        </Text>
      </Paper>
    </Container>
  );
}
