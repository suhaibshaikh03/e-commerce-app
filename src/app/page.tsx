import Image from "next/image"
import ProductList from "./components/ProductList"
const Homepage = async ({searchParams}:{searchParams:Promise<{category:string}>}) => {
    const category = (await searchParams).category;
  return (
    <div className="mb-12">
      <div className="relative aspect-[3/1] w-full mb-8">
        <Image
          src="/featured.png"
          alt="featured"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <ProductList category={category} params="homepage"/>
    </div>
  )
}

export default Homepage