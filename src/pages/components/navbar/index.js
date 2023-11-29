import { useState } from "react";
import { Group, Code } from "@mantine/core";
import { IconUsers, IconShoppingCart, IconLogout } from "@tabler/icons-react";
import classes from "./navbar.module.css";
import logo2 from "../../../../public/assets/logo2.png";
import Image from "next/image";
import Link from "next/link";

const data = [
  { link: "", label: "Account", icon: IconUsers },
  { link: "", label: "Product", icon: IconShoppingCart },
];

export function Navbar() {
  const [active, setActive] = useState("Billing");

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <Image src={logo2} width={200} alt="Lolycones" />
        </Group>
        {links}
      </div>

      <div className={classes.footer}>
        <Link
          href="/"
          className={classes.link}
        >
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </Link>
      </div>
    </nav>
  );
}
