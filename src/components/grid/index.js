import classes from "./grid.module.css";
import { Image, Paper, Grid } from "@mantine/core";

const data1 = [
  {
    image: "/assets/flavors/chocolate.png",
    name: "Chocolate",
  },
  {
    image: "/assets/flavors/cookies.png",
    name: "Cookies",
  },
  {
    image: "/assets/flavors/vanilla_chocochip.png",
    name: "Oreo",
  }
];

const data2 = [
  {
    image: "/assets/flavors/durian.png",
    name: "Durian"
  },
  {
    image: "/assets/flavors/mangga.png",
    name: "Mango"
  },
  {
    image: "/assets/flavors/mint.png",
    name: "Mint"
  },
  {
    image: "/assets/flavors/taro.png",
    name: "Taro"
  }
]

const data3 = [
  {
    image: "/assets/flavors/blue_raspberry.png",
    name: "Blue Raspberry"
  },
  {
    image: "/assets/flavors/pistacio_almond.png",
    name: "Pistacio Almond"
  },
  {
    image: "/assets/flavors/stroberi.png",
    name: "Strawberry"
  },
  {
    image: "/assets/flavors/bubble_gum.png",
    name: "Bubble Gum"
  },
  {
    image: "/assets/flavors/vanilla.png",
    name: "Vanilla"
  }
]

function Card({ image, name }) {
  return (
    <div className={classes.cardContainer}>
      <Paper shadow="xl" p="sm" radius="md" className={classes.card}>
        <Image src={image} alt="Flavor" className={classes.image} />
      </Paper>
      <p className={classes.name}>{name}</p>
    </div>
  );
}

export function FlavorList() {
  return (
    <div>
       <h5 className={classes.text}>Flavor Variant</h5>
        <Grid justify="center" align="center">
        {data1.map((item, index) => (
          <Grid.Col
            key={index}
            className={classes.item}
            span={2.4}
          >
            <Card image={item.image} name={item.name} />
          </Grid.Col>
        ))}
      </Grid>
      <Grid justify="center" align="center">
        {data2.map((item, index) => (
          <Grid.Col
            key={index}
            className={classes.item}
            span={2.4}
          >
            <Card image={item.image} name={item.name} />
          </Grid.Col>
        ))}
      </Grid>
      <Grid justify="center" align="center">
        {data3.map((item, index) => (
          <Grid.Col
            key={index}
            className={classes.item}
            span={2.4}
          >
            <Card image={item.image} name={item.name} />
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}
