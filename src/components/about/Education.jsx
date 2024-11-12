import React from "react";

const educationContent = [
  {
    year: "2019 - Current",
    degree: "Bsc Mathematics",
    institute: "Kwame Nkrumah University of Science and Technology",
    details: `  Second Class Honours`, 
  },
  {
    year: "2015 - 2018",
    degree: "General Science - WASSCE",
    institute: "Sammo Senior High School",
    details: `Regimental Band Captain, PRO - Entertainment Committee`,
  },
  {
    year: "2011 - 2015",
    degree: "BECE ",
    institute: "Forever Young International School",
    details: `Head Prefect 14/15, Best Students 4 consecutive years`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
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
