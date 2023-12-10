import { Image, Container, Title, Text } from "@mantine/core";
import image from "/public/assets/profile.jpg";
import classes from "./about.module.css";

export function About() {
  return (
    <Container className={classes.container} size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Get to Know Us</Title>
          <Text c="dimmed" mt="md">
            The name Lolycones was a joke made by Aditya and Ranu when they
            wanted to create a name for the this project.
          </Text>
        </div>
        <Image src={image.src} className={classes.image} />
      </div>
    </Container>
  );
}
