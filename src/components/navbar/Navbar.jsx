"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Links from "./links/Links"
import styles from "./navbar.module.css"
import { auth } from "@/lib/auth";

const Navbar =  () => {
  const pathname = usePathname()
  // console.log(pathname);
  // const session = await auth();
  const loadSession = async () => {
    const session = await auth();
    return session;
  };

  return (
    <div className={`${styles.container} ${pathname === '/' && ' absolute w-full flex z-10 p-2'} `}>
    {/* <div className={`${styles.container} top-0 z-10 `}> */}
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <Links session={loadSession}/>
      </div>
    </div>
  )
}

export default Navbar;