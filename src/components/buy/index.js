import React, { useState } from 'react';
import { Text, Paper, Image, Button, CloseButton } from '@mantine/core';
import classes from './buy.module.css';
import Coklat from "../../../public/assets/flavors/chocolate.png";

function Card({ image, name, detail, harga }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={classes.cardContainer}>
      <Paper shadow="xl" p="md" radius="md" className={classes.card}>
        <div className={classes.contentContainer}>
          <Image src={image} alt={name} className={classes.image} />
          <div className={classes.textContainer}>
            <Text className={classes.name}>{name}</Text>
            <Text className={classes.detail}>{detail}</Text>
          </div>
          <div className={classes.priceContainer}>
            <Text className={classes.priceLabel}>Price</Text>
            <Text className={classes.harga}>{harga}</Text>
          </div>
          <div className={classes.addToCartContainer}>
            <Button size="sm" variant="outline" color="blue" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            {showPopup && (
              <div className={classes.popup}>
                <CloseButton className={classes.closeButton} onClick={handleClosePopup} />
                <p>Already put in the basket</p>
              </div>
            )}
          </div>
        </div>
      </Paper>
    </div>
  );
}


export function BuyPage() {
  return (
    <div className={classes.product}>
      <Card
        image={Coklat.src}
        name="Chocolate"
        detail="Ice cream with a delicious chocolate base, uses cocoa as the main ingredient to give it a sweet and savory taste."
        harga="1$"
      />
    </div>
  );
}
