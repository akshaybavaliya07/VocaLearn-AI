import Image from "next/image"
import Link from "next/link"
import NavItems from "./NavItems"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-auto w-full px-14 py-4 bg-white max-sm:px-4">
            <Link href="/">
                <div className="flex items-center gap-2.5 cursor-pointer">
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={46}
                        height={44}
                    />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
            </div>
        </nav>
  )
}

export default Navbar