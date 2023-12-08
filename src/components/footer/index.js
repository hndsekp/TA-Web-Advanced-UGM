import { Container} from '@mantine/core';
import classes from './footer.module.css';

export function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <p className={classes.footerBot}>Copyright &copy;2023; Designed by <span class="designer">Alhendes & Ranu</span></p>
      </Container>
    </div>
  );
}