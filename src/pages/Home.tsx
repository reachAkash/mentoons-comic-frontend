import ContentSection from "@/components/Home/ContentSection"
import HeroBanner from "@/components/Home/HeroBanner"
import MdMultiverse from "@/components/Home/MdMultiverse"
import WhatWeOffer from "@/components/Home/WhatWeOffer"

const Home = () => {
  return (
    <div className="h-full w-full">
      <HeroBanner/>
      <MdMultiverse/>
      <WhatWeOffer/>
      <ContentSection/>
    </div>
  )
}

export default Home
