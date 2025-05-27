import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { productName } from "package.json";

export function meta({}: Route.MetaArgs) {
  return [
    { title: productName },
    { name: "description", content: `Welcome to ${productName}!` },
  ];
}

export default function Home() {
  return <Welcome />;
}
