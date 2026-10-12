import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

const Header = () => {
  return (
    <header className="bg-[#0C4479] p-2 flex items-center justify-center sticky top-0 z-50">
      <Link href="/" passHref>
        <Image
          src={logo}
          alt="Logo"
          width={220}
          height={220}
          className="cursor-pointer"
        />
      </Link>
    </header>
  );
};

export default Header;
