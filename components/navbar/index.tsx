import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-100 px-10 py-4 flex items-center justify-center gap-5">
      <Link href={"https://youtu.be/Mt5aSPYN9XQ"} target="__blank">
        Demo
      </Link>
      <Link href={"/"}>Insta.Scraper</Link>
      <Link href={"https://github.com/tier3guy/insta.scraper"} target="__blank">
        Github
      </Link>
    </div>
  );
};

export default Navbar;
