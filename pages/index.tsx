import React from "react";
import { Button, Ptag, Tag } from "../components";
import { Htag } from "../components/HTag/HTag";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary">Узнать подробнее</Button>
      <Button appearance="ghost">Узнать подробнее</Button>
      <Ptag>Средний</Ptag>
      <Ptag size="l">Большой</Ptag>
      <Ptag size="s">Малый</Ptag>
      <Tag color="red" size="s">
        Маленьки
      </Tag>
      <Tag color="green" size="m">
        Средний
      </Tag>
      <Tag color="primary">Primary</Tag>
    </>
  );
}
