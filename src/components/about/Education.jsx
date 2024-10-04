import React from "react";

const educationContent = [
  {
    year: "2023",
    degree: "Best Performance Award",
    institute: "CodeCreators",
    details: `Achieved recognition for Best Performance at CCI in 2023, showcasing exceptional dedication and outstanding contributions to the organization's success.`,
  },
  {
    year: "2020",
    degree: "Frontend ReactJs Complete Course",
    institute: "Coursera",
    details: `Complete course included ReactJs and Sass skills`,
  },
  {
    year: "2019",
    degree: "BS(Info. Technology)",
    institute: "UAF UNIVERSITY",
    details: `Overview about all subjects related to the Computer Science Like DataBase, Development, Artificial Intelligence,Data Structure, Algorithems etc. Final Year Project on Text Recognition. `,
  },
  {
    year: "2015",
    degree: "F.Sc.(Pre-Engineering)",
    institute: "BISE LAHORE",
    details: `Major subject Mathematics and Physics`,
  }
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
          <i className="fa fa-graduation-cap"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
