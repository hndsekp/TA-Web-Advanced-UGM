import { Avatar, Text, Group, Image, Paper } from "@mantine/core";
import classes from "./product.module.css";


const data = [
  {
    image: "/assets/flavors/chocolate.png",
    name: "Chocolate",
    detail:
      "Ice cream with a delicious chocolate base, uses cocoa as the main ingredient to give it a sweet and savory taste.",
    harga: "$1",
  },
  {
    image: "/assets/flavors/cookies.png",
    name: "Cookies",
    detail:
      "Ice cream with the addition of pieces of cookies, provides a combination of soft and creamy ice cream with delicious cookies such as chocolate chips or oats.",
    harga: "$1",
  },
  {
    image: "/assets/flavors/vanilla_chocochip.png",
    name: "Oreo",
    detail:
      "Ice cream containing pieces of Oreo biscuits, provides a combination of delicious ice cream with the deliciousness and crunchy texture of chocolate biscuits.",
    harga: "$1",
  },
  {
    image: "/assets/flavors/durian.png",
    name: "Durian",
    detail:
      "Ice cream with a rich, creamy and buttery durian fruit flavor, provides a unique experience with the strong aroma and distinctive taste of this tropical fruit.",
    harga: "$1",
  },
  {
    image: "/assets/flavors/mangga.png",
    name: "Mangga",
    detail:
      "Ice cream with a sweet, fresh and tropical taste from mango fruit, providing a refreshing soft and creamy sensation.",
    harga: "$1",
  },
  {
    image: "/assets/flavors/mint.png",
    name: "Mint",
    detail:
      "Ice cream with a fresh, minty and cold taste, providing a combination of sweetness and a refreshing sensation.",
    harga: "$1",
  },
  {
    image: "/assets/flavors/taro.png",
    name: "Taro",
    detail:
      "Ice cream with a unique flavor from taro tubers, providing a soft, creamy and slightly thick taste with a touch of vanilla and a soft purple color.",
    harga: "$1",
  },
  {
    image: "/assets/flavors/blue_raspberry.png",
    name: "Blue Raspberry",
    detail:
      "Ice cream with a sweet, fresh and slightly sour blue raspberry flavor, characterized by its striking blue color.",
    harga: "$1",
  },
  {
    image: "/assets/flavors/pistacio_almond.png",
    name: "Pistacio Almond",
    detail:
      "Ice cream with a distinctive taste of pistachios and almonds, providing a creamy, savory and crunchy taste.",
    harga: "$1",
  },
  {
    image: "/assets/flavors/stroberi.png",
    name: "Strawberry",
    detail:
      "Ice cream with a sweet and fresh taste from strawberries, giving a soft and creamy sensation with a bright pink color.",
    harga: "$1",
  },
  {
    image: "/assets/flavors/bubble_gum.png",
    name: "Bubble Gum",
    detail:
      "Ice cream with a flavor inspired by bubble gum chewing gum, providing a delightfully sweet and flavorful experience with bright colors.",
    harga: "$1",
  },
  {
    image: "/assets/flavors/vanilla.png",
    name: "Vanilla",
    detail:
      "Classic ice cream with a smooth and creamy taste, extracted from vanilla beans, provides a simple but enticing ice cream experience.",
    harga: "$1",
  },
];

function Card({ image, name, detail, harga }) {
  return (
    <div className={classes.cardContainer}>
      <Paper shadow="xl" p="sm" radius="md" className={classes.card}>
        <div className={classes.contentContainer}>
          <Image src={image} alt="Flavor" className={classes.image} />
          <div className={classes.textContainer}>
            <Text className={classes.name}>{name}</Text>
            <Text className={classes.detail}>{detail}</Text>
          </div>
          <div className={classes.priceContainer}>
            <Text className={classes.priceLabel}>Price</Text>
            <Text className={classes.harga}>{harga}</Text>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export function ProductPage() {
  return (
    <div className={classes.product}>
      {data.map((item, index) => (
        <div key={index} className={classes.cardMargin}>
          <Card
            image={item.image}
            name={item.name}
            detail={item.detail}
            harga={item.harga}
          />
        </div>
      ))}
      
    </div>
  );
}
