import { Group, Button, Box, Burger, useMantineTheme } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./header.module.css";

export function Header() {
  const theme = useMantineTheme();

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <MantineLogo size={30} />

          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="#" className={classes.link}>
              Home
            </a>
            <a href="#" className={classes.link}>
              Products
            </a>
            <a href="#" className={classes.link}>
              Outlets
            </a>
            <a href="#" className={classes.link}>
              About Us
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button variant="default">Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </Group>
      </header>
    </Box>
  );
}
