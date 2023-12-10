import { Group, Button, Box } from "@mantine/core";
import Image from "next/image";
import Logo from "/public/assets/logo3.png";
import classes from "./navbar.module.css";
import { IconShoppingCart } from "@tabler/icons-react";
import { useRouter } from "next/router";

export function Navbar() {
  const router = useRouter();
  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image src={Logo} width={120} alt="Lolycones"/>
          <Group h="100%" gap={0} visibleFrom="sm">
            <a href="/" className={classes.link}>
              Home
            </a>
            <a href="/product" className={classes.link}>
              Products
            </a>
            <a href="#" className={classes.link}>
              Flavors
            </a>
            <a href="#" className={classes.link}>
              About Us
            </a>
          </Group>

          <Group visibleFrom="sm">
            <Button onClick={() => router.push('/auth/login')}>
              <IconShoppingCart stroke={1.5}/>
              <span>Purchase</span>
              </Button>
          </Group>
        </Group>
      </header>
    </Box>
  );
}
