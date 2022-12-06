import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return null
  return (
    <div className="h-[60vh] w-full relative">
      <Image
        src="/cali.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt=""
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
