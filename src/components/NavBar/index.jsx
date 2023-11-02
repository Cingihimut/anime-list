import Link from "next/link";
import InputSearch from "./InputSearch";
import Login from "./login";

const NavBar = () => {
  return (
    <header className="bg-color-blackMode">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-2xl text-color-primary">
          Anime List
        </Link>
        <InputSearch />
        <Login />
      </div>
    </header>
  );
};

export default NavBar;
