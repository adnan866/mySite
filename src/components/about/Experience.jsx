import React from "react";

const experienceContent = [
  {
    year: "   2022 - Present",
    position: "Frontend Developer",
    compnayName: "CodeCreators",
    details: (<span>Code Creators is a Canada based I.T and Software Development Company. They specialize in Website Development, Mobile Application Development, Custom Software Solutions, SharePoint Services.
      <ul>
      <li>Achieved recognition for Best Performance at CCI in 2023, showcasing exceptional dedication and outstanding contributions to the organization's success.</li>
        <li>Revamped user interfaces across web and mobile platforms, resulting in a 40% increase in user engagement and a 25% decrease in bounce rate, driving higher conversions and revenue growth.</li>
        <li>Accomplished in SharePoint site development, custom CSS implementation, and adept at building SPFX web parts using React.js and SCSS.</li>
        <li>Throughout my career, I have gained valuable experience working with clients to understand their needs, design solutions and redesign their default webparts that meet their specific requirements</li></ul></span>),
  },
  {
    year: "2021 - 2022",
    position: " UI/UX Developer",
    compnayName: "Soft Pvt. Ltd.",
    details: (<span>Soft Pvt is a UK-based company that extended its operations by establishing an IT department in Pakistan in 2015. Specializing in selling branded garments in bulk to the European market.
      <ul><li>As a frontend developer, I effectively revamped and optimized the ERP system and website for a product-focused company in alignment with their Figma designs.</li>
        <li>Collaborating with backend developers to add new modules or functionalities to ERP systems and design them according to requirements.</li>
        <li>I have designed HTML email newsletters for marketing campaigns with the goal of generating more sales.</li></ul></span>),
  },
  {
    year: "2019 - 2021",
    position: "Frontend/WordPress Developer",
    compnayName: "CreativeDous",
    details: (<span>CreativeDous is a marketing agency known for its innovative campaigns and strategic solutions. They specialize in driving brand success through creativity and data-driven insights.
      <ul><li>Created custom websites and landing pages with a focus on SEO optimization and mobile-first design principles, tailored for marketing campaigns.</li>
        <li>"I gained hands-on experience in cloudways server management, hosted live websites, Google Search Console and Google Tag Manager. My web development skills empowered clients to enhance SEO and optimize website performance.</li>
        <li>Created WordPress websites with E-commerce, membership, and blogging features for various clients.</li> <li>Successfully restored websites following malware attacks</li></ul></span>),
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
