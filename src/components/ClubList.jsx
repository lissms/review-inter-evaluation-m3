import React from "react";
import Club from "./Club";

const ClubList = (props) => {
  const items = props.clubs.map((element, i) => {
    return (
      <li key={i}>
        <Club members={element.members} name={element.name} f={element.fa} />
      </li>
    );
  });

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

export default ClubList;
