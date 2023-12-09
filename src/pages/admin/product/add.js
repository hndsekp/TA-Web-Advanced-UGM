import {
  FileInput,
  TextInput,
  Textarea,
  NumberInput,
  Box,
  rem,
  Button,
  Group,
} from "@mantine/core";
import { IconCurrencyDollar } from "@tabler/icons-react";
import { useState } from "react";
import { PrismaClient } from "@prisma/client";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "@/firebase/config";

const prisma = new PrismaClient();

export default function AddProduct({ onProductAdded }) {
  const icon = (
    <IconCurrencyDollar
      style={{ width: rem(20), height: rem(20) }}
      stroke={1.5}
    />
  );

  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState("");


  const handleFileChange = (file) => {
    setFile(file);
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const storage = getStorage(app);
    const storageRef = ref(storage, `images/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadUrl = await getDownloadURL(snapshot.ref);

    const response = await fetch('/api/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageUrl: downloadUrl,
        name: name,
        detail: detail,
        price: parseFloat(price),
      }),
    });
  
    if (response.ok) {
      console.log('Product added successfully');
      onProductAdded();
    } else {
      console.error('Failed to add product');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box maw={360} mx="auto" p="md">
          <Box maw={340}>
            <FileInput
              accept="image/*"
              id="productImageInput"
              label="Product Image"
              placeholder="Click to input image"
              multiple={false}
              files={file}
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
          </Box>
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
