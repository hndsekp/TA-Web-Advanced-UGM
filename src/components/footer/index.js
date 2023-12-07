import { Container, Image } from '@mantine/core';
import { MantineLogo } from "../../../public/assets/logo3.png";
import classes from './footer.module.css';

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <Image className={classes.fotoFooter} src={MantineLogo}/>
        <p className={classes.footerBot}>Copyright &copy;2023; Designed by <span class="designer">Alhendes & Ranu</span></p>
      </Container>
    </div>
  );
}