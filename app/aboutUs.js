import Image from "next/image";

export default function AboutUs() {
  const image1 = require("@/public/images/image.png");
  const image2 = require("@/public/images/image2.png");

  return (
    <>
      <div id="about" className="aboutusContainer  ">
        <div className="whowe ">
          <h5 className="sectionTitle">Who We are?</h5>
          <p>
            We are a dedicated cooperative of banana sellers committed to
            providing the freshest, highest-quality bananas while supporting
            sustainable farming practices and empowering our community of
            growers and sellers. Our mission is to deliver exceptional produce
            while fostering a sustainable and ethical agricultural ecosystem. By
            prioritizing the well-being of our farmers and the environment, we
            ensure that every banana we sell meets the highest standards of
            quality and taste.
          </p>
          <p>
            We proudly offer a variety of bananas, including 'itharai',
            'kathali', 'sevvalai', and 'poovan' bananas, each known for their
            unique flavors and textures. In addition to catering to retail
            customers, we also engage in purchasing directly from them, ensuring
            a fair and supportive market for all. Our cooperative thrives on the
            principles of cooperation, transparency, and mutual respect, making
            us a trusted name in the banana-selling industry. Join us in our
            journey towards a greener, healthier future by enjoying our
            sustainably sourced bananas.
          </p>
          <div className="contactusBtn">
            <button>Contact Us</button>
          </div>
        </div>
        <div className="aboutusImage ">
          <div className="leftDiv ">
            <div className="imgLeft">
              <Image
                alt="sliderImage"
                src={image1}
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="square"></div>
          </div>
          <div className="rightDiv">
            
          <div className="squareRight"></div>
            <div className="imgRight ">
              <Image
                alt="banana Image"
                src={image2}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
