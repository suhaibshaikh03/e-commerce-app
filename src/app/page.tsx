import Image from "next/image"
const Homepage = () => {
  return (
    <div className='relative aspect-[3/1] mb-12'>
      <div>
        <Image src="/featured.png" alt="featured" fill/>

      </div>
    </div>
  )
}

export default Homepage