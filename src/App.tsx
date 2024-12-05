import { useEffect } from "react";

import AnimateSVG from "./components/loading/animateSVG";
import Wrap from "./components/loading/wrap";
import Top from "./components/top/top";

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);

    const animateSVGElement = document.querySelector(".animateSVG") as HTMLElement;
    const wrapElement = document.querySelector(".wrap") as HTMLElement;

    setTimeout(() => {
      animateSVGElement.classList.add("-translate-y-full");
    }, 1500);

    setTimeout(() => {
      wrapElement.classList.add("-translate-y-full");
    }, 1700);

  }, []);

  return (
    <main>
      <AnimateSVG />
      <Wrap />
      <Top />
    </main>
  );
}