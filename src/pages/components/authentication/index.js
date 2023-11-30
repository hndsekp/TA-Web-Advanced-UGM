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
import classes from "./auth.module.css";

export function Auth() {
  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome to Lolycones!
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email / Username" placeholder="Your Email / Username" required />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button className={classes.buttonsi} fullWidth mt="xl">
          Sign in
        </Button>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Don't have an account?{" "}
          <Anchor className={classes.createsi} size="sm" ta="center" component="button">
            Create account
          </Anchor>
        </Text>
        
      </Paper>
    </Container>
  );
}
