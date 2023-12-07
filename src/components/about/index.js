import {
  Image,
  Container,
  Title,
  Text,
} from "@mantine/core";
import image from "../../../public/assets/makan.png";
import classes from "./about.module.css";

export function About() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Get to Know Us</Title>
          <Text c="dimmed" mt="md">
            Eskrim adalah sejuta rasa dalam setiap gigitan, dengan kombinasi
            lembutnya es krim dan beragam topping yang memikat, menyajikan
            kenikmatan di setiap sendoknya. Pilihan sempurna untuk memanjakan
            lidah dan menghadirkan kebahagiaan melalui tiap sentuhan es krim
            yang lezat.
          </Text>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}
