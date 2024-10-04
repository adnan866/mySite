import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-facebook",
    link: "https://www.facebook.com/danii0070",
  },
  // { iconName: "fa fa-twitter", link: "https://twitter.com/" },
  // {
  //   iconName: "fa fa-youtube",
  //   link: "https://www.youtube.com/",
  // },
  
  { iconName: "fa fa-linkedin", link: "https://linkedin.com/in/adnan-maqsood/" },
  { iconName: "fa fa-skype", link: "skype:adnanmaqsood383?chat" },
  { iconName: "fa fa-github", link: "https://github.com/adnan866" },
  { iconName: "fa fa-stack-overflow", link: "https://stackoverflow.com/users/11746432/adnan-maqsood" },
  
];

const Social = () => {
  return (
    <ul className="social list-unstyled pt-1 mb-5">
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            <i className={val.iconName}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
