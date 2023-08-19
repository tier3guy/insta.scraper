import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-100 px-10 py-4 flex items-center justify-center gap-5">
      <Link href={"/"}>Demo</Link>
      <Link href={"/"}>Insta.Scraper</Link>
      <Link
        href={"https://github.com/tier3guy/threads.scraper"}
        target="__blank"
      >
        Github
      </Link>
    </div>
  );
};

export default Navbar;
