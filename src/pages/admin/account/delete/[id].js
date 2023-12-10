import { Box, Group, Button } from "@mantine/core";

export default function DeleteAccount({ account, onAccountDeleted }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/accounts/delete/${account.id}`, {
            method: "DELETE",
          });
          if (response.ok) {
            console.log("Account deleted successfully");
            onAccountDeleted();
          } else {
            console.error("Failed to delete account");
          }
    };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box maw={340} mx="auto" p="md">
          Are you sure want to delete this account?
          <Group justify="flex-end" mt="md">
            <Button mt="xl" variant="filled" color="red" type="submit">
              Delete Account
            </Button>
          </Group>
        </Box>
      </form>
    </>
  );
}
