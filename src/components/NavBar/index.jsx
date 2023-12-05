import Link from "next/link";
import InputSearch from "./InputSearch";
// import ConnectButton from "./ConnectButton";
import UserActionButton from "./UserActionButton";

const NavBar = () => {

  return (
    <header className="bg-color-blackMode">
      <div className="flex md:flex-row justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-2xl text-color-primary">
          Anime List
        </Link>
        <InputSearch />
            <UserActionButton/>
            {/* <ConnectButton/> */}
      </div>
    </header>
  );
};

export default NavBar;
