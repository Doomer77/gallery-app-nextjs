import React, { useEffect, useState } from "react";
import { Button, Ptag, Reating, Tag } from "../components";
import { Htag } from "../components/HTag/HTag";

export default function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);
  useEffect(() => {
    console.log(`Counter: ${counter}`);
    return function cleanup() {
      console.log("Unmount");
    };
  });

  useEffect(() => {
    console.log(`Mount`);
  }, []);
  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button appearance="primary" onClick={() => setCounter((x) => x + 1)}>
        Узнать подробнее
      </Button>
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
      <Reating rating={rating} isEditable setRating={setRating} />
    </>
  );
}
