import { Container, Text } from '@mantine/core';
import Logo from '/public/assets/logo3.png';
import classes from './footer.module.css';
import Image from 'next/image';


export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Image src={Logo} alt="Logo" width={130} />
        <Text className={classes.text}>The Lolycones</Text>
      </Container>
    </div>
  );
}
