"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { github } from "../utils/icons";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";
import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "../context/globalContext";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />

        <div className="btn-group flex items-center gap-2">
          <ThemeDropdown />

          <Button className="source-code-btn flex items-center gap-2">
            <Link
              href="https://github.com/sahiAlam"
              target="_blank"
              className="flex items-center gap-2"
            >
              {github} Source Code
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
