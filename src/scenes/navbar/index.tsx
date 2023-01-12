import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

type Props = {};

function Navbar({}: Props) {
  const FlexBetween = "flex items-center justify-between";
  return (
    <nav>
      <div className={`${FlexBetween} fixed top-0 z-30 w-full py-6`}></div>
    </nav>
  );
}

export default Navbar;
