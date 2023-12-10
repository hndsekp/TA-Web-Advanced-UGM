import { Group, Button, Box } from "@mantine/core";
import Image from "next/image";
import Logo from "/public/assets/logo3.png";
import classes from "./navbar.module.css";
import { IconShoppingCart } from "@tabler/icons-react";
import { useRouter } from "next/router";
import Link from "next/link";

const data = [
  {link: "/", label:"Home"},
  {link: "/product", label:"Products"},
  {link: "/", label:"Flavors"},
  {link: "/", label:"About Us"},
]

export function Navbar() {
  const router = useRouter();
  const link = data.map((item, index) => (
    <Link key={index} className={classes.link}
    href={item.link}>{item.label}</Link>))
  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image src={Logo} width={120} alt="Lolycones"/>
          <Group h="100%" gap={0} visibleFrom="sm">
            {link}
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
