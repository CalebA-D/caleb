import React from "react";

const achievementsContent = [
  { title: "3", subTitle1: "years of", subTitle2: "experience" },
  { title: "7", subTitle1: "IT", subTitle2: "Certificates" },
  { title: "15", subTitle1: "total completed", subTitle2: "projects" },
  { title: "4", subTitle1: "building", subTitle2: "projects" },
  { title: "37", subTitle1: "Happy", subTitle2: "customers" },
  { title: "1", subTitle1: "awards", subTitle2: "won" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
