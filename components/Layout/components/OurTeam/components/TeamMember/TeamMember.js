import React from "react";
import Image from 'next/image'

const TeamMember = ({name,desiginaion,image,about}) => {
  return (
    <div className="hover-team">
      <div className="our-team">
        <Image src={image} alt={name} width="100%" height="100%" layout="responsive" />
        <div className="team-content">
          <h3 className="title">{name}</h3>
          <span className="post">{desiginaion}</span>
        </div>
        <ul className="social">
          <li>
            <a href="#" className="fab fa-facebook"></a>
          </li>
          <li>
            <a href="#" className="fab fa-twitter"></a>
          </li>
          <li>
            <a href="#" className="fab fa-google-plus"></a>
          </li>
          <li>
            <a href="#" className="fab fa-youtube"></a>
          </li>
        </ul>
        <div className="icon">
          <i className="fa fa-plus" aria-hidden="true"></i>
        </div>
      </div>
      <div className="team-description">
        <p>
          {about}
        </p>
      </div>
      <hr className="my-0" />
    </div>
  );
};

export default TeamMember;
