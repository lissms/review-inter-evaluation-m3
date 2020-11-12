import React from "react";
import Club from "./Club";

function ClubList(props) {
  const cart = props.clubs.map((club, index) => {
    return (
      <li key={index}>
        <Club>{club.name}</Club>
      </li>
    );
  });
  return (
    <div>
      <Club list={cart} />
    </div>
  );
}

export default ClubList;
