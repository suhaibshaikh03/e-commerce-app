"use client"
import { ProductType } from "@/types";

const ProductInteraction = ({ product, selectedSize, selectedColor }: { product: ProductType; selectedSize: string; selectedColor: string; }) => {
    return (
        <div className="flex flex-col gap-4 mt-4">
            {/* SIZE */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">Size</span>
                <div className="flex items-center gap-2">
                    {product.sizes.map(size => (
                        <div className="" key={size}>
                            <div className="">{size}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* COLOR */}
            <div className="flex flex-col gap-2 text-sm"></div>
            {/* QUANTITY */}
            <div className="flex flex-col gap-2 text-sm"></div>

        </div>
    );
};
export default ProductInteraction;