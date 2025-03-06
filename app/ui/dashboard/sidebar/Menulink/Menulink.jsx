"use client";
import Link from "next/link";
import styles from "./Menulink.module.css";
import { usePathname } from "next/navigation";

const Menulink = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
      href={item.path}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default Menulink;
