import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "HTML" },
  { skillClass: "p90", skillPercent: "90", skillName: "CSS" },
  { skillClass: "p80", skillPercent: "85", skillName: "JQUERY" },
  { skillClass: "p86", skillPercent: "86", skillName: "JAVASCRIPT" },
  { skillClass: "p85", skillPercent: "85", skillName: "REACTJS" },
  { skillClass: "p80", skillPercent: "80", skillName: "NextTJS" },
  { skillClass: "p75", skillPercent: "75", skillName: "TypeScript" },
  { skillClass: "p85", skillPercent: "85", skillName: "Tailwind" },
  { skillClass: "p90", skillPercent: "90", skillName: "BootStrap" },
  { skillClass: "p75", skillPercent: "75", skillName: "SASS" },
  { skillClass: "p85", skillPercent: "80", skillName: "API" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p82", skillPercent: "82", skillName: "Git/Github" },
  { skillClass: "p75", skillPercent: "75", skillName: "Sharepoint" },
  { skillClass: "p65", skillPercent: "65", skillName: "SPFX" },
  { skillClass: "p90", skillPercent: "90", skillName: "cloudways" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
