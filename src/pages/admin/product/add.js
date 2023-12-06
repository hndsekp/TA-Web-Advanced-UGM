import { useState } from "react";
import {
  FileInput,
  TextInput,
  Textarea,
  NumberInput,
  Box,
  rem,
  Button,
} from "@mantine/core";
import { DashboardLayout } from "@/layouts/dashboard";
import { IconCurrencyDollar } from "@tabler/icons-react";
import Link from "next/link";

export default function Add() {
  const icon = (
    <IconCurrencyDollar
      style={{ width: rem(20), height: rem(20) }}
      stroke={1.5}
    />
  );
  const [formData, setFormData] = useState({
    product_image: null,
    product_name: "",
    product_detail: "",
    product_price: 0,
  });

  const handleInputChange = (key, value) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleFileChange = (files) => {
    const file = files[0];
    setFormData((prevData) => ({ ...prevData, product_image: file }));
  };

  const handleInputProduct = async () => {
    try {
      const response = await fetch("/api/products/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Product added successfully");
      } else {
        console.error("Error adding product:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding product:", error.message);
    }
  };

  return (
    <>
      <Box maw={340} mx="auto">
        <h1>Add Product</h1>
        <Box maw={340}>
          <FileInput
            label="Product Image"
            placeholder="Click to input image"
            onChange={(files) => handleFileChange(files)}
          />
          <TextInput
            mt="md"
            label="Product Name"
            placeholder="Product Name"
            onChange={(event) =>
              handleInputChange("product_name", event.target.value)
            }
          />
          <Textarea
            mt="md"
            label="Product Detail"
            placeholder="Product Detail"
            onChange={(event) =>
              handleInputChange("product_detail", event.target.value)
            }
          />
          <NumberInput
            rightSection={icon}
            mt="md"
            label="Product Price"
            placeholder="Product Price"
            decimalScale={2}
            fixedDecimalScale
            defaultValue={5.5}
            onChange={(value) => handleInputChange("product_price", value)}
          />
        </Box>
        <Link href={"/admin/product"}>
          <Button mt="xl" variant="filled" onClick={handleInputProduct}>
            Input Product
          </Button>
        </Link>
      </Box>
    </>
  );
}

Add.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
