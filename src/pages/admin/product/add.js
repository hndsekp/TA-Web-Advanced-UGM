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
  const [base64Image, setBase64Image] = useState("");
  const router = useRouter();
  const icon = (
    <IconCurrencyDollar
      style={{ width: rem(20), height: rem(20) }}
      stroke={1.5}
    />
  );
  /*const handleFileChange = (event) => {
    if (
      event.currentTarget &&
      event.currentTarget.files &&
      event.currentTarget.files.length > 0
    ) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(event.currentTarget.files[0]);
      fileReader.onload = () => {
        setBase64Image(fileReader.result);
      };
    }
  };
  const handleInputProduct = async () => {
    const productName = document.getElementById("productNameInput").value;
    const productDetail = document.getElementById("productDetailInput").value;
    const productPrice = document.getElementById("productPriceInput").value;

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productDetail", productDetail);
    formData.append("productPrice", productPrice);
    formData.append("productImage", base64Image);
    
    try {
      const response = await fetch("/api/products/add", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        router.push("/admin/product");
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const errorData = await response.json();
          console.error("Upload failed:", errorData.message);
        } else {
          console.error("Upload failed with status:", response.status);
        }
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  };*/
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
