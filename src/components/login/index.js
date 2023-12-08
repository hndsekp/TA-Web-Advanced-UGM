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
import classes from "./login.module.css";
import Link from "next/link";

export function Login() {
  return (
    <div className={classes.container}>
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome to Lolycones
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Username" placeholder="Your Username" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
        </Group>
        <Button className={classes.buttonsi} fullWidth mt="xl">
          Sign in
        </Button>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
        {"Don't have an account? "}
          <Link href="/auth/signup">
            <Anchor className={classes.createsi} size="sm" ta="center" component="button">
              Create account
            </Anchor>
          </Link>
        </Text>
        
      </Paper>
    </Container>
    </div>
  );
}
