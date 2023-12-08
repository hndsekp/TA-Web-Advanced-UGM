import { TextInput, PasswordInput, NativeSelect, Box, Button } from "@mantine/core";
import { DashboardLayout } from "@/layouts/dashboard";

export default function AddAccount() {
  return (
    <>
      <Box maw={340} mx="auto">
        <h1>Add Account</h1>
        <Box maw={340}>
          <TextInput
            id="accountUsernameInput"
            mt="md"
            label="Account Username"
            placeholder="Account Username"
          />
          <PasswordInput
            id="accountPasswordInput"
            mt="md"
            label="Account Password"
            placeholder="Account Password"
          />
          <NativeSelect label="Account Role" mt="md" data={['Admin', 'User']} />
        </Box>
        <Button mt="xl" variant="filled">
          Input Account
        </Button>
      </Box>
    </>
  );
}

AddAccount.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
