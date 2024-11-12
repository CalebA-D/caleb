import React from "react";



const experienceContent = [
  {
    year: "   September 2022 - Present",
    position: " Vice President, Projects And Innovation",
    companyName: "Enactus KNUST",
    details: ` Compiled 4 projects’ goals, vision and
    strategy for 2022/23 academic year. Managed all projects and project leads. Created an operational team
     to monitor and supervise all operations of the enactus body.
     `,
  },
  {
    year: "   March 2022 - Present",
    position: " Programs Manager,",
    companyName: "Campus Aid - Ghana",
    details: `  Wrote proposal for partnership to Africa
    Center for Youth Development.
    - Created the Entrepreneurship and Capacity
    Building project for the organization to train
    students.
    - Pitched and designed Project Synergy
    [integrated learning business creation
    project].`,
  },
  {
    year: "   March 2022 - September 2022",
    position: " Active Team Member, Member - Project Effishent, Corporate Division. ",
    companyName: "Enactus KNUST",
    details: ` Participated in Enactus National Competition
    2022 and won the Most Innovative Project
    Award.
    - Identified social market gaps and devised
    creative solutions using design thinking for
    WellFed [tomatoes Preservation project]
    - Collected needs assessment from Ashanti
    School of Deaf, Jamasi for modification of Rel
    App for Deaf Students.
    - Trained for competitions and challenges as a
    presenter, public speaker and pitcher.
    - Created and assisted in the development of
    power point pitch decks and 2022 Enactus
    National Competition presentation video`,
  },
  {
    year: "   January 2022 - Present ",
    position: " Committee Member, Digital Skill Trainer",
    companyName: "Projects and Technology Committee - - National Society Of Black Engineers (NSBE)",
    details: `  Trained 23 beginners in python programming from scratch`,
  },
  {
    year: "October 2021 - December 2021",
    position: " Data analyst and Files Tracker",
    companyName: "Kumasi Hive",
    details: `Developed and designed dashboard for all
    media equipment.
    - Developed a file tracking spreadsheet of the
    media department.
    - Pitched on about a directional map idea and
    was implemented.
    - Designed an excel/goggle sheet dashboard
    for all equipment in the media department.
    - Developed a python-based login
    authentication for Hive media App.`,
  },
  {
    year: "   2021 - Present",
    position: "Team Member",
    companyName: "Campus Hype Crew",
    details: ` - Made business brands visible. E.g., Icy Cup.
      - Serves as ambassadors for Vodafone Turn
    Up, Waakye Embassy, Boomplay.`,
  },
  {
    year: "   February 2023 - Present ",
    position: " Technical Team member, Social Media Manager, Programs Cordinator",
    companyName: "Tikvah Africa (ACYD)",
    details: `  Managed and grown all four mainstream social media accounts. `,
  },
  {
    year: "   2021 - Present",
    position: " Publicity Team Member",
    companyName: "Science Student Association of KNUST",
    details: `  Collaborated and publicized all relevant information to Scisans and KNUST `,
  },
  {
    year: "   2021 - Present",
    position: " Publicity Team Member",
    companyName: "The Mathematics Community & SCISA - KNUST",
    details: ` Collaborated and publicized all relevant information to TMC and KNUST students `,
  },
  {
    year: "Saturday, 11th February, 2023",
    position: "Tomorrow's Leadership Conference",
    companyName: "Tikvah Africa (ACYD)",
    details: `Updating soon...`,
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
            <span className="place open-sans-font">{val.companyName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
