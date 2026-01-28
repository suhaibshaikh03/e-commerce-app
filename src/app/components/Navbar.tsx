import Image from "next/image"
import Link from  "next/link"
import SearchBar from "@/app/components/SearchBar"
import {House} from "lucide-react"
import {Bell} from "lucide-react"
import {ShoppingCart} from "lucide-react"
import ShoppingCartIcon from "./ShoppingCartIcon"

const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
        
            {/* LEFT */}
            <Link href="/" className="flex items-center">
            <Image
            src="/logo.png"
            alt="SUHAIB&apos;S ECOMMERCE"
            width={36}
            height={36}
            className="w-6 h-6 md:w-9 md:h-9"
            />
            <p className="hidden md:block text-md font-medium tracking-wider text-yellow-400">SUHAIB&apos;S MART</p>
            </Link>
            {/* RIGHT */}
            <div className="flex items-center gap-6">
            <SearchBar/>
            <Link href="/">
            <House className="w-4 h-4 text-gray-600"/>
            </Link>
            <Link href="">
            <Bell className="w-4 h-4 text-gray-600"/>
            </Link>
            <ShoppingCartIcon/>
            <Link href="/login">
            Sign in
            </Link>

            </div>
        </nav>
    )
}

export default Navbar