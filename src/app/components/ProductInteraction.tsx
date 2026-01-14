"use client"
import { ProductType } from "@/types";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const ProductInteraction = ({ product, selectedSize, selectedColor }: { product: ProductType; selectedSize: string; selectedColor: string; }) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const handleTypeChange = (type:string, value:string) =>{
        const params = new URLSearchParams(searchParams.toString())
        params.set(type,value)
        router.push(`${pathname}?${params.toString()}`,{scroll:false})
    }
    return (
        <div className="flex flex-col gap-4 mt-4">
            {/* SIZE */}
            <div className="flex flex-col gap-2 text-xs">
                <span className="text-gray-500">Size</span>
                <div className="flex items-center gap-2">
                    {product.sizes && product.sizes.length > 0 ? (
                        product.sizes.map(size => (
                            <div className={`cursor-pointer border-1 p-[2px] ${selectedSize === size ? "border-gray-600" : "border-gray-300" }`} key={size}
                            onClick={()=>handleTypeChange("size",size)}
                            >
                                <div className={`w-6 h-6 text-center flex items-center justify-center ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}>{size.toUpperCase()}</div>
                            </div>
                        ))
                    ) : (
                        <p>No sizes available</p>
                    )}
                </div>
            </div>
            {/* COLOR */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">Color</span>
                <div className="flex items-center gap-2">
                    {product.colors && product.colors.length > 0 ? (
                        product.colors.map(color => (
                            <div
                                className={`cursor-pointer border-1 p-[2px] ${selectedColor === color ? "border-gray-600" : "border-gray-300" }`}
                                key={color}
                                style={{ backgroundColor: color }}
                            >
                                <div className={`w-6 h-6 rounded-full border border-gray-300`}></div>
                            </div>
                        ))
                    ) : (
                        <p>No colors available</p>
                    )}
                </div>
            </div>
            {/* QUANTITY */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">Quantity</span>
                <div className="flex items-center gap-2">
                    <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="w-16 border border-gray-300 rounded px-2 py-1"
                    />
                </div>
            </div>

        </div>
    );
};
export default ProductInteraction;