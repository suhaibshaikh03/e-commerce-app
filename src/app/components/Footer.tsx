import Image from "next/image"
import Link from  "next/link"
const Footer = () => {
return (
    <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start bg-gray-800 p-8 rounded-lg md:justify-between md:gap-0  ">
        <div className="flex flex-col gap-4 items-center md:items-start ">
        <Link href="/" className="flex items-center">
            <Image
            src="/logo.png"
            alt="SUHAIB&apos;S ECOMMERCE"
            width={36}
            height={36}

            />
            <p className="hidden md:block text-md font-medium tracking-wider text-yellow-400">SUHAIB&apos;S MART</p>
            </Link>
            <p className="text-sm text-gray-400">
            &copy; 2025 SUHAIB&apos;S ECOMMERCE
            </p>
            <p className="text-sm text-gray-400">
                All rights reserved
            </p>
            <p className="text-sm text-gray-400">
                Made by Muhammad Suhaib Shaikh
            </p>
        </div>
        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        </div>

        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">All Products</Link>
        <Link href="/">New Arrival</Link>
        <Link href="/">Best Sellers</Link>
        <Link href="/">Sale</Link>
        </div>

        <div className="flex flex-col gap-4 text-sm text-gray-400 items-center md:items-start">
        <p className="text-sm text-amber-50">Links</p>
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">Blog</Link>
        <Link href="/">Affilate Program</Link>
        </div>

    </div>
)
}
export default Footer