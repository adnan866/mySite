import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Adnan" },
  { meta: "last name", metaInfo: "Maqsood" },
  { meta: "Age", metaInfo: "27 Years" },
  { meta: "Address", metaInfo: "Lahore, Pak" },
  { meta: "Nationality", metaInfo: " Pakistan" },
  { meta: "Passport", metaInfo: "AX0310492 / Dec-2033" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Phone", metaInfo: (<span><a target="_blank" href="tel:+923059843866">+92 305 9843 866</a></span>)},
  { meta: "Skype", metaInfo: (<span><a target="_blank" href="skype:adnanmaqsood383?chat">adnanmaqsood383</a></span> )},
  { meta: "Email", metaInfo: (<span><a target="_blank" href="mailto:adnanmaqsood383@gmail.com">adnanmaqsood383@gmail.com</a></span>) },
  { meta: "Whatsapp", metaInfo: (<span><a target="_blank" href="https://wa.link/x21yf9"> +92 305 9843 866</a><br/> <a target="_blank" href="https://wa.link/3x3pv8">+971 547 597 296</a></span>) },
  { meta: "languages", metaInfo: " English, Urdu, Hindi" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta} </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">: {val.metaInfo}</span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
