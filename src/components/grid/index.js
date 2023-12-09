import classes from "./grid.module.css";
import { Image, Paper, Grid } from "@mantine/core";

const data1 = [
  {
    image: "/assets/flavors/chocolate.png",
    name: "chocolate",
  },
  {
    image: "/assets/flavors/cookies.png",
    name: "cookies",
  },
  {
    image: "/assets/flavors/vanilla_chocochip.png",
    name: "oreo",
  }
];

const data2 = [
  {
    image: "/assets/flavors/durian.png",
    name: "durian"
  },
  {
    image: "/assets/flavors/mangga.png",
    name: "mangga"
  },
  {
    image: "/assets/flavors/mint.png",
    name: "mint"
  },
  {
    image: "/assets/flavors/taro.png",
    name: "taro"
  }
]

const data3 = [
  {
    image: "/assets/flavors/blue_raspberry.png",
    name: "blue raspberry"
  },
  {
    image: "/assets/flavors/pistacio_almond.png",
    name: "pistacio almond"
  },
  {
    image: "/assets/flavors/stroberi.png",
    name: "stroberi"
  },
  {
    image: "/assets/flavors/bubble_gum.png",
    name: "bubble gum"
  },
  {
    image: "/assets/flavors/vanilla.png",
    name: "vanilla"
  }
]

function Card({ image, name }) {
  return (
    <div className={classes.cardContainer}>
      <Paper shadow="xl" p="sm" radius="md" className={classes.card}>
        <Image src={image} alt="Flavor" className={classes.image} />
      </Paper>
      <h2 className={classes.name}>{name}</h2>
    </div>
  );
}

export default function Rasa() {
  return (
    <div>
       <h2 className={classes.teks}>Varian Rasa</h2>
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
