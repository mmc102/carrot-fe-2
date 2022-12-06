import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import Image from "next/image"
import React from "react"
import UnderlineLink from "@modules/common/components/underline-link"
import { useRouter } from "next/router"
const imgUrls = [
  <Image
    src="/big_sur.jpg"
    layout="fill"
    loading="eager"
    priority={true}
    quality={90}
    objectFit="contain"
    alt=""
    className="absolute inset-0"
    draggable="false"
  />,
  <Image
    src="/rick.jpg"
    layout="fill"
    loading="eager"
    priority={true}
    quality={90}
    objectFit="contain"
    alt=""
    className="absolute inset-0"
    draggable="false"
  />,
  <Image
    src="/hew.jpg"
    layout="fill"
    loading="eager"
    priority={true}
    quality={90}
    objectFit="contain"
    alt=""
    className="absolute inset-0"
    draggable="false"
  />,
  <Image
    src="/the_bug.jpg"
    layout="fill"
    loading="eager"
    priority={true}
    quality={90}
    objectFit="contain"
    alt=""
    className="absolute inset-0"
    draggable="false"
  />,
  <Image
    src="/jt.jpg"
    layout="fill"
    loading="eager"
    priority={true}
    quality={90}
    objectFit="contain"
    alt=""
    className="absolute inset-0"
    draggable="false"
  />,
  <Image
    src="/lrc.jpg"
    layout="fill"
    loading="eager"
    priority={true}
    quality={90}
    objectFit="contain"
    alt=""
    className="absolute inset-0"
    draggable="false"
  />,
]

const pars = [
  "Carrot Hauler mantleing onto big sur ledge",
  "Rick field testing a carrot hauler in the enchantments",
  "Hew himself towing pads to an immient smackdown",
  "Carrot Hauler in the Yosemite Bug following a trip to the Valley",
  "Hew and the haulers kicking it in Joshua Tree",
  "A Deluxe Flosser in the wild",
]

class Carousel extends React.Component {
  constructor(props: Any) {
    super(props)

    this.state = {
      currentImageIndex: 0,
    }

    this.nextSlide = this.nextSlide.bind(this)
    this.previousSlide = this.previousSlide.bind(this)
  }

  previousSlide() {
    const lastIndex = imgUrls.length - 1
    const { currentImageIndex } = this.state
    const shouldResetIndex = currentImageIndex === 0
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1

    this.setState({
      currentImageIndex: index,
    })
  }

  nextSlide() {
    const lastIndex = imgUrls.length - 1
    const { currentImageIndex } = this.state
    const shouldResetIndex = currentImageIndex === lastIndex
    const index = shouldResetIndex ? 0 : currentImageIndex + 1

    this.setState({
      currentImageIndex: index,
    })
  }

  render() {
    return (
      <div>
        <div className="py-12 center">
          <div className="h-[70vh] w-full relative">
            {imgUrls[this.state.currentImageIndex]}
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex flex-row items-center text-center">
              <Arrow
                direction="left"
                clickFunction={this.nextSlide}
                glyph="&#9664;"
              />
              <Arrow
                direction="right"
                clickFunction={this.nextSlide}
                glyph="&#9654;"
              />
            </div>
          </div>

          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-xl-regular text-left text-gray-1000 max-w-xlg mb-4">
              {pars[this.state.currentImageIndex]}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow  ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
)

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div>
      <div className="py-12 center">
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
        <div className="content-container py-12">
          <div className="flex flex-col items-center text-center mb-16">
            <p className="text-3xl-regular text-gray-1000 max-w-xlg mb-4">
              Who We Are
            </p>
            <div>
              <Image
                src="/carrot.png"
                loading="eager"
                priority={true}
                quality={90}
                objectFit="contain"
                objectPosition="left"
                alt=""
                width={80}
                height={80}
                className="block"
                draggable="false"
              />
              <p className="text-xl-regular text-left text-gray-1000 max-w-xlg mb-4">
                - Carrot Threadworks is a small business that makes supplies for
                climbers.
              </p>
            </div>

            <p className="text-xl-regular text-left text-gray-1000 max-w-xlg mb-4">
              - We strive to make effective gear, and do it as sustainably as
              possible.
            </p>
            <p className="text-xl-regular text-left text-gray-1000 max-w-xlg mb-4">
              - We utilize recycled fabrics, and are proud to offer these
              versions of our products.
            </p>
            <p className="text-xl-regular text-left text-gray-1000 max-w-xlg mb-4">
              - We aspire to sell you a product that lasts for life.
            </p>
            <p className="text-xl-regular text-left text-gray-1000 max-w-xlg mb-4">
              - We make everything in our small shop in California
            </p>
            <p className="text-xl-regular text-left text-gray-1000 xlg mb-4">
              <br />
              <br />
              <br />
              Behind all the equipment we make are prototypes that my friends
              and I have personally tested, destroyed, and remade.
            </p>
          </div>
          <Carousel />
        </div>
      </div>
      <div className="bg-amber-100 px-8 py-24 flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl-semi">
          If you're picking up what we're putting down, see what we have to
          offer!
        </h1>
        <div>
          <UnderlineLink href="/store">Show me the goods</UnderlineLink>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
