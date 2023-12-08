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
import { useRouter } from "next/router";
import { useState } from "react";

export default function AddProduct() {
  const icon = (
    <IconCurrencyDollar
      style={{ width: rem(20), height: rem(20) }}
      stroke={1.5}
    />
  );
  return (
    <>
      <Box maw={340} mx="auto">
        <h1>Add Product</h1>
        <Box maw={340}>
          <FileInput
            accept="image/jpg, image/jpeg, image/png"
            id="productImageInput"
            label="Product Image"
            placeholder="Click to input image"
            multiple={false}
          />
          <TextInput
            id="productNameInput"
            mt="md"
            label="Product Name"
            placeholder="Product Name"
          />
          <Textarea
            id="productDetailInput"
            mt="md"
            label="Product Detail"
            placeholder="Product Detail"
          />
          <NumberInput
            id="productPriceInput"
            rightSection={icon}
            mt="md"
            label="Product Price"
            placeholder="Product Price"
            decimalScale={2}
            fixedDecimalScale
            defaultValue={5.5}
          />
        </Box>
        <Button mt="xl" variant="filled">
          Input Product
        </Button>
      </Box>
    </>
  );
}

AddProduct.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
