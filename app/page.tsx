"use client";

import { Inter } from "@next/font/google";
import Features from "components/Features";
import Header from "components/Header";
import Pricing from "components/Pricing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Pricing />
      <Features />
    </>
  );
}
