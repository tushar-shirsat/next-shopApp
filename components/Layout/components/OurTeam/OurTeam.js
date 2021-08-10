import React from "react";
import { useSelector } from "react-redux";
import TeamMember from "./components/TeamMember/TeamMember";




const OurTeam = () => {
  const TeamMembers = useSelector(state => state.teamMembers)
  return (
    <div className="row my-4">
      <div className="col-12">
        <h2 className="noo-sh-title">Meet Our Team</h2>
      </div>
      {TeamMembers.map((memberDetail,index) => (
        <div key={index} className="col-sm-6 col-lg-3">
            <TeamMember  {...memberDetail} />
        </div>
      ))}
    </div>
  );
};
export default OurTeam;
