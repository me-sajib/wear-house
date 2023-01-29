import React from "react";

const Team = ({ team }) => {
  const { name, position, img, details } = team;
  return (
    <div className="col">
      <div className="team" data-aos="fade-up" data-aos-duration="1000">
        <div className="img">
          <img src={img} className="img-fluid" alt="" />
        </div>
        <div className="details">
          <h1 className="name">{name}</h1>
          <h3 className="position">{position}</h3>
          <p className="details pt-2">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
