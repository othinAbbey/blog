import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-blue-100 p-4">
      <nav className="flex items-center justify-between">
        <div className="logo">{/* You can add a logo here */}</div>
        <h1 className="text-4xl font-bold text-blue-500">Blogging App</h1>
      </nav>
      <div className="text-red-500 hover:text-blue-700">
        <Link href="/" className="mr-4">
          Home
        </Link>
        <Link href="/about" className="mr-4">
          About
        </Link>

        <Link href="/allblogs/BlogTitles">Blogs</Link>
      </div>
    </div>
  );
};

export default Navbar;
