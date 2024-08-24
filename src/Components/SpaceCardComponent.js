import React from "react";
import "./SpaceCardComponent.css";

const SpaceCardComponent = ({
  mission_name,
  launch_year,
  launch_date_local,
  details,
  links,
  launch_site,
}) => {
  let trimString = function (string, length) {
    return string.length > length
      ? string.substring(0, length) + "..."
      : string;
  };
  return (
    <div className="card col-lg-3 col-mb-3 shadow-lg border-0 rounded-3">
      <img
        src={links.mission_patch}
        className="card-img-top"
        alt={`${mission_name} mission patch`}
      />
      <div className="card-body">
        <h5 className="card-title">{mission_name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{launch_year}</h6>
        <p className="card-text">
          <strong>Launch Date:</strong>{" "}
          {new Date(launch_date_local).toLocaleString()}
        </p>
        <p className="card-text">
          <strong>Details:</strong> {details.substring(0, 80)}
        </p>
        <p className="card-text">
          <strong>Launch Site:</strong> {launch_site.site_name}
        </p>
      </div>
      <div className="card-footer text-muted">
        <small>Data provided by SpaceX</small>
      </div>
    </div>
  );
};

export default SpaceCardComponent;
