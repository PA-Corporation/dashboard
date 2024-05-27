import React from "react";
import { Button, Link } from "@nextui-org/react";
import styles from "./styles.module.css";
import { Section } from "@/types";

interface Button01Props {
  data: Section;
  path: string;
}

const Button01: React.FC<Button01Props> = ({ data, path }) => {
  return (
    <Button
      key={data.name}
      href={data.href}
      as={Link}
      variant="solid"
      className={`${styles["btn"]} ${
        path === data.href ? styles["btn-active"] : ""
      }`}
      startContent={data.icon ? <data.icon /> : null}
    >
      {data.name}
    </Button>
  );
};

export default Button01;
