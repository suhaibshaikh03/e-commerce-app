"use client"
import Link from "next/link"
import Image from "next/image"
import { ProductType } from "@/types";
const ProductCard = ({product}:{product:ProductType}) => {
    return (
        <div className="shadow-lg rounded-lg overflow-hidden">
           {/* IMAGE */}
            <Link href={`/products/${product.id}`}>
            <div className="relative aspect-[2/3]">
                <Image src={product.images[product.colors[0]]} alt={product.name} fill className="object-cover hover:scale-105 transition-all duration-300"/>
            </div>
            </Link>
            {/* PRODUCT DETAIL */}
            <div className="flex flex-col gap-4 p-4">
                <h1 className="font-medium">{product.name}</h1>
                <p className="text-sm text-gray-500">{product.shortDescription}</p>
                {/* PRODUCT TYPES */}
                <div className="flex items-center gap-4 text-xs">
                    {/* SIZES */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Size</span>
                        <select name="size" id="size" className="ring ring-gray-300 rounded-md px-2 py-1">
                            {product.sizes.map(size=>(
                            <option key={size} value={size}>{size.toUpperCase()}</option>
                        ))}</select>
                    </div>
                    {/* COLORS */}
                    <div className="flex flex-col gap-1">
                        <span className="text-gray-500">Color</span>
                        <div className="flex items-center gap-2">
                            {product.colors.map(color=>(
                                <div className="" key={color}>
                                    <div
                                        className="w-4 h-4 rounded-full border border-gray-300"
                                        style={{
                                            backgroundColor: color === 'white' ? '#ffffff' :
                                                            color === 'black' ? '#000000' :
                                                            color === 'gray' ? '#808080' :
                                                            color === 'purple' ? '#800080' :
                                                            color === 'green' ? '#008000' :
                                                            color === 'blue' ? '#0000FF' :
                                                            color === 'red' ? '#FF0000' :
                                                            color === 'orange' ? '#FFA500' :
                                                            color === 'pink' ? '#FFC0CB' :
                                                            color
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* PRICE AND ADD TO CART */}
                <div className="flex items-center justify-between">
                    <p className="font-medium">{product.price.toFixed(2)}</p>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )

}
export default ProductCard