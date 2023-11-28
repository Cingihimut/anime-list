import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";
import Particles from "@/components/Design";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession()

  return (
    <div className="mt-8 text-color-primary flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold">Welcome to Dashboard, {user?.name}</h3>
      <Image src={user?.image} alt="..." width={250} height={250} />
      <Particles />
      <div className="flex flex-wrap gap-4 py-8">
        <Link href="/users/dashboard/collection" className="px-4 py-3 font-bold bg-color-accent text-color-dark text-xl" >My Collections</Link>
        <Link href="/users/dashboard/comment" className="px-4 py-3 font-bold bg-color-accent text-color-dark text-xl" >My Comment</Link>
      </div>
    </div>
  );
};

export default Page;
