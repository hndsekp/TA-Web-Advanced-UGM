import { Group, Button, Box, useMantineTheme} from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import logo3 from "../../../../public/assets/logo3.png";
import classes from "./header.module.css";
import { IconShoppingCart } from "@tabler/icons-react";

export function Header() {
  const theme = useMantineTheme();

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image src={logo3} width={120} alt="Lolycones"/>

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
            <Link href="/auth/login">
            <Button>
              <IconShoppingCart stroke={1.5}/>
              <span>Purchase</span>
              </Button>
            </Link>
          </Group>
        </Group>
      </header>
    </Box>
  );
}
