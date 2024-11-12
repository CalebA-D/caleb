import React from "react";

const skillsContent = [
  { skillClass: "p90", skillPercent: "90", skillName: "PROJECT MANAGEMENT" },
  { skillClass: "p62", skillPercent: "62", skillName: "HTML" },
  { skillClass: "p30", skillPercent: "30", skillName: "REACT" },
  { skillClass: "p48", skillPercent: "48", skillName: "PYTHON" },
  { skillClass: "p85", skillPercent: "85", skillName: "EXCEL || Data Analysis/analytics" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS || (web development)" },
  { skillClass: "p92", skillPercent: "90", skillName: "POWERPOINT ||(microsoft office)" },
  { skillClass: "p80", skillPercent: "80", skillName: "EVENT PLANNING" },
  { skillClass: "p60", skillPercent: "60", skillName: "MATLAB / R" },
  { skillClass: "p94", skillPercent: "95", skillName: "LATEX" },
  { skillClass: "p85", skillPercent: "85", skillName: "DATA VISUALIZATION" },
  { skillClass: "p95", skillPercent: "95", skillName: "PITCHING || PUBLIC SPEAKING || PRESENTATION" },
  { skillClass: "p95", skillPercent: "95", skillName: "PUBLICITY" },
  
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
