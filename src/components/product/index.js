import { Text, Image, Paper, Group } from "@mantine/core";
import classes from "./product.module.css";
import { useState, useEffect } from "react";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  // GET data to display
  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const product = products.map((item) => (
    <div key={item.id} className={classes.cardMargin}>
      <div className={classes.cardContainer}>
        <Paper shadow="xl" p="sm" radius="md" className={classes.card}>
          <div className={classes.contentContainer}>
            <Image
              src={`${item.product_image}`}
              alt={`Product ${item.product_name}`}
              className={classes.image}
            />
            <div className={classes.textContainer}>
              <Text className={classes.name}>{item.product_name}</Text>
              <Text className={classes.detail}>{item.product_detail}</Text>
            </div>
            <div className={classes.priceContainer}>
              <Text className={classes.priceLabel}>Price</Text>
              <Text className={classes.price}>{item.product_price}$</Text>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  ));

  return (
      <div className={classes.product}>{product}</div>
  );
}
