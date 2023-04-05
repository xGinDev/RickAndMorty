"use client";
import React from "react";
import Link from "next/link";
import { PAGE_SECTIONS } from "../../data/page-sections";
import { NavBar } from "../../types/navBar";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="menu-links">
        {PAGE_SECTIONS.map((section: NavBar) => (
          <Link
            key={section.id}
            href={`/${section.route}`}
            className="LinkMenu"
          >
            {section.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
