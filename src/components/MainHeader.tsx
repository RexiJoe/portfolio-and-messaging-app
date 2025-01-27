"use client";

import Link from "next/link";
import ProjectsList from "./project1 components/ProjectsList";
import LogoutButton from "./LogoutButton";
import verifyUser from "@/lib/verifyUser";
import { useEffect } from "react";

//import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default function MainHeader() {
  //const {isAuthenticated} = getKindeServerSession()

  //const isUserAuth = await isAuthenticated()

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <div className="w-full flex text-white justify-around items-center border-b border-slate-800 bg-slate-900 ">
      <div className="w-full sm:w-auto gap-1 py-2 flex flex-col items-center justify-around sm:justify-center text-2xl sm:pl-10 sm:flex-row sm:h-16 sm:gap-40">
        <Link href="/" className="text-white font-semibold">
          Daniel Ayala
        </Link>
        {/* <span className="material-symbols-rounded text-4xl text-black sm:hidden" >arrow_drop_down</span> */}
        <ProjectsList />
      </div>

      <LogoutButton styles="hidden items-center w-auto sm:flex sm:text-base" />

      {/* {isUserAuth ? <LogoutLink className="bg-black py-1 px-3 mx-3 rounded-lg" >Log Out</LogoutLink> : ""} */}
    </div>
  );
}
