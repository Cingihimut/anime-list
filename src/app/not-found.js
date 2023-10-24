"use client"

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";


const Page = () => {
return(
    <div className="min-h-screen max-w--xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center gap-4">
            <FileSearch size={40} className="text-color-accent"/>
            <Link href="/">
                <h3 className="text-color-accent hover:text-color-primary transition-all text-2xl font-bold">Page Not Found</h3>
            </Link>
        </div>
    </div>
)
}

export default Page;