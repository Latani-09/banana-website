"use client";
import AboutUs from "./aboutUs";
import Service from "./Service";
import Team from "./Team";
import Image from "next/image";
import "./globals.css";
import withViewport from "./FadeInHOC/withViewPort";
import FadeInSectionWithViewport from "./FadeInHOC/FadeInSection";
import FadeInSection from "./FadeInHOC/FadeInSection";
export default function Home() {

  const image1 = require( "@/public/images/image.png" )
  const image2 = require( "@/public/images/image2.png")
  const FadeInSectionWithViewport = withViewport(FadeInSection);
  return (
    <div id="home" className="homeContainer">
      <div className="frontImageContainer ">
        <div className="gradient">

        </div>
        <div className="bgImgLeft ">
          <Image
            className="image "
            alt="sliderImage"
            src={image1}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="bgImgRight">
          <Image
            className="image "
            alt="sliderImage"
            src={image2}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
     < FadeInSectionWithViewport>
      <AboutUs />
      </FadeInSectionWithViewport>
      < FadeInSectionWithViewport>
      <Team />
      </FadeInSectionWithViewport>
      < FadeInSectionWithViewport>
      <Service/>
      </FadeInSectionWithViewport>
    </div>
  );
}
