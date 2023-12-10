import { Box, Group, Button } from "@mantine/core";
import { getStorage, ref, deleteObject } from "firebase/storage";
import app from "@/firebase/config";

export default function DeleteProduct({ product, onProductDeleted }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/products/delete/${product.id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("Product deleted successfully");
      onProductDeleted();
      const storage = getStorage(app);
      const imageRef = ref(storage, `${product.product_image}`);
      deleteObject(imageRef)
        .then(() => {
          console.log("Image deleted successfully from Firebase Storage");
          onProductDeleted();
        })
        .catch((error) => {
          console.error("Failed to delete image from Firebase Storage", error);
        });
    } else {
      console.error("Failed to delete product");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box maw={340} mx="auto" p="md">
          Are you sure want to delete this product?
          <Group justify="flex-end" mt="md">
            <Button mt="xl" variant="filled" color="red" type="submit">
              Delete Product
            </Button>
          </Group>
        </Box>
      </form>
    </>
  );
}
