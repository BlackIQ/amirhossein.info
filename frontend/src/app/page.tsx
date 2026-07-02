import type { Metadata } from "next";

import Navbar from "@/components/navbar/navbar.component";
import { HomeContent } from "@/components/home-content/home-content.component";

export const metadata: Metadata = {
  title: "Amirhossein Mohammadi",
  description:
    "Personal portfolio of Amirhossein Mohammadi - Platform & Infrastructure Engineer",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeContent />
    </>
  );
}
