import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Caleb" },
  { meta: "last name", metaInfo: "Agyemang-Duah" },
  { meta: "Entrepreneurship", metaInfo: "4 Years" },
  { meta: "Nationality", metaInfo: "Ghanaian" },
  { meta: "Freelancing", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Kumasi" },
  { meta: "phone", metaInfo: "+233559201271" },
  { meta: "Email_1", metaInfo: "cagyemangduah2@gmail.com" },
  { meta: "Email_2", metaInfo: "cagyemangduah2@yahoo.com" },
  { meta: "LinkedIn", metaInfo: " calebagyemangduah" },
  { meta: "Twitter", metaInfo: " ch_calculus" },
  { meta: "Github", metaInfo: " CalebAD1" },
  { meta: "languages", metaInfo: " English, Akan" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
