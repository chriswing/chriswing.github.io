import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" width={100} height={50}/>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About Me</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
    </nav>
  );
};

export default Navbar;
