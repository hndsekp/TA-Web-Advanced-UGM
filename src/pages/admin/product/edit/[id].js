import { PrismaClient } from "@prisma/client";
import { useEffect, useState } from "react";
import {
  FileInput,
  TextInput,
  Textarea,
  NumberInput,
  Box,
  Button,
  Group,
  rem,
  Image,
} from "@mantine/core";
import { IconCurrencyDollar } from "@tabler/icons-react";
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import app from "@/firebase/config";

const prisma = new PrismaClient();

export default function EditProduct({ product, onProductEdited }) {
  const icon = (
    <IconCurrencyDollar
      style={{ width: rem(20), height: rem(20) }}
      stroke={1.5}
    />
  );

  const [image, setImage] = useState(product ? product.product_image : null);
  const [name, setName] = useState(product ? product.product_name : "");
  const [detail, setDetail] = useState(product ? product.product_detail : "");
  const [price, setPrice] = useState(product ? product.product_price : "");

  useEffect(() => {
    if (product) {
      setImage(product.product_image);
      setName(product.product_name);
      setDetail(product.product_detail);
      setPrice(product.product_price);
    }
  }, [product]);

  const handleFileChange = (image) => {
    setImage(image);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newImageUrl = product.product_image;
      if (image instanceof File) {
    const storage = getStorage(app);
    const newFileRef = ref(storage, `products/${image.name}`);
    await uploadBytes(newFileRef, image);
    newImageUrl = await getDownloadURL(newFileRef);
  }

    const response = await fetch(`/api/products/edit/${product.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product_image: newImageUrl,
        product_: name,
        product_detail: detail,
        product_price: parseFloat(price),
      }),
    });

    if (response.ok) {
      console.log("Product update successfully");
      onProductEdited();
  
      if (product.product_image && newImageUrl !== product.product_image) {
        const storage = getStorage(app);
        const oldFileRef = ref(storage, product.product_image);
        await deleteObject(oldFileRef).catch((error) => console.error("Error deleting old image:", error));
      }
    } else {
      console.error("Failed to update product");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box maw={360} mx="auto" p="md">
          <FileInput
            accept="image/*"
            id="productImageInput"
            label="Product Image"
            placeholder="Click to input image"
            multiple={false}
            onChange={handleFileChange}
          />
          <TextInput
            id="productNameInput"
            mt="md"
            label="Product Name"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Textarea
            id="productDetailInput"
            mt="md"
            label="Product Detail"
            placeholder="Product Detail"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          />
          <NumberInput
            id="productPriceInput"
            rightSection={icon}
            mt="md"
            label="Product Price"
            placeholder="Product Price"
            decimalScale={2}
            fixedDecimalScale
            value={price}
            onChange={(value) => setPrice(value)}
          />

          <Group justify="flex-end" mt="md">
            <Button mt="xl" variant="filled" type="submit">
              Input Product
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
    console.error("Error fetching account:", error);
  }
  return {
    props: {
      account: account ? JSON.parse(JSON.stringify(account)) : null,
    },
  };
}
