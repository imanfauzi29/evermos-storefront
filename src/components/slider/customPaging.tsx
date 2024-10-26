import Slider, { Settings } from "react-slick"
import styles from "./Slider.module.css"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"

interface SliderCustomPagingProps {
  images: string[]
}

export default function SliderCustomPaging({
  images,
}: SliderCustomPagingProps) {
  const settings: Settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <Image
            src={images[i]}
            alt={`images-${i}`}
            layout="fill"
            objectFit="contain"
          />
        </a>
      )
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  }
  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((baseUrl, index) => (
          <div className={styles.sliderItem} key={index}>
            <Image
              src={baseUrl}
              alt={baseUrl}
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
