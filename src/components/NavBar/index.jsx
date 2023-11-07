import Link from "next/link";
import InputSearch from "./InputSearch";
import ConnectButton from "./ConnectButton";
import UserActionButton from "./UserActionButton";
// import { useState } from "react";
// import { connectWeb3 } from "../Utilities/web3";
// import { errors } from "web3";
// import { usePathname } from "next/navigation";

const NavBar = () => {

//   const [connectAddress, setConnectAddress] = useState(null);
//   const connectToMetamask = async ()=> {
//     try{
//       const web3 = await connectWeb3();
//       const accounts = await web3.eth.requestAccounts();
//       if(accounts.length > 0){
//         setConnectAddress(accounts[0])
//       }
//     } catch(error) {
//       console.error(error)
//     }
//  };

  return (
    <header className="bg-color-blackMode">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-2xl text-color-primary">
          Anime List
        </Link>
        <InputSearch />
        <UserActionButton/>
        {/* <ConnectButton /> */}
      </div>
    </header>
  );
};

export default NavBar;
