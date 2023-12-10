import { Container, Title, Text} from "@mantine/core";
import classes from "./hero.module.css";

export function Hero() {
  return (
    <div className={classes.root} mt="xl">
      <Container size="xl">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Your Favourite Ice Cream Shop
            </Title>

            <Text className={classes.description} mt={30}>
              Lolycones, the place to find exclusive ice cream
              delights that captivate the taste buds and provide an
              unforgettable taste experience. Explore endless flavor adventures
              at Lolycones, where every bite is a unique journey through
              incredible flavor combinations.
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
}
