import React, { useState } from "react";
import Modal from "react-modal";
// import heroImg from "../../assets/img/hero/dark.jpg";
// import heroImgMobile from "../../assets/img/hero/img-mobile.jpg";

// import heroImg from "../../assets/img/hero/AdnanDev.jpg";
import heroImgMobile from "../../assets/img/hero/AdnanDevMob.webp";
import cancelImg from "../../assets/img/cancel.svg";
import Index from "../../components/about/index";

const heroContent = {
  heroImage: heroImgMobile,
  heroMobileImage: heroImgMobile,
  heroTitleName: "Adnan Maqsood",
  heroDesignation: "Frontend Developer | ReactJS | NextJS",
  // heroDescriptions: `I'm web designer & front-end developer focused on
  // crafting clean & user-friendly experiences, I am passionate about
  // building excellent software that improves the lives of those
  // around me.`,
  heroDescriptions: `Over the past 4+ years, I have had the privilege of working on various projects that demanded a deep understanding of ReactJS, Sass, and different libraries. My strength lies in troubleshooting and collaborating effectively with fellow developers. Transformed web and mobile interfaces, yielding a 40% surge in user engagement and a 25% reduction in bounce rates, resulting in increased conversions and revenue. My expertise extends to crafting SEO-optimized, mobile-first websites and landing pages tailored for marketing campaigns. I possess hands-on proficiency in cloudways server management, live website hosting, Google Search Console, and Google Tag Manager, enabling clients to optimize SEO and bolster website performance. My WordPress skills shine in delivering E-commerce, membership, and blogging websites for diverse clientele. Additionally, I've showcased my adeptness in swiftly restoring websites post-malware attacks.
  `,
  heroBtn: "more about me",
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + heroContent.heroImage
              })`,
          }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <img
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
            />
            <h1 className="text-uppercase poppins-font">
              I'm {heroContent.heroTitleName}
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font">{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <img src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
