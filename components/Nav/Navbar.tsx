"use client";
import { useState, forwardRef, useEffect, useRef } from "react";
type NavType = {
  name: string;
  to: string;
  href: string;
};
const menuItems: NavType[] = [
  { name: "about", to: "#about", href: "/#about" },
  { name: "projects", to: "#projects", href: "/#projects" },
  { name: "blog", to: "#blog", href: "/#blog" },
];
const Navbar = ({ active }: { active: boolean }) => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex flex-col space-y-5 w-max">
        {menuItems.map((item, index) => (
          <li key={item.name}>
            <a href={item.href} className="group flex items-center">
              <span
                className={`nav-indicator w-8 transition-all h-px mr-4 bg-clrs-primary-50 ${
                  active ? "active" : ""
                }`}
              ></span>
              <span className="tracking-wide font-semibold uppercase antialiased text-xs">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
