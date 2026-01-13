"use client"

import {usePathname, useRouter, useSearchParams} from "next/navigation"

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleFilter = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        router.push(`${pathname}?${params.toString()}`,{scroll: false});
    };





    return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
        <span>Sort by:</span>
        <select name="sort" id="sort" className="bg-gray-100 border border-gray-300 text-gray-700 rounded-lg px-3 py-2 shadow-inner transition-all duration-200 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent appearance-none cursor-pointer" onChange={(e)=>handleFilter(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
        </select>

    </div>
    );
}

export default Filter;