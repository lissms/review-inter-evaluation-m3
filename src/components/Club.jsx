import React from "react";

const Club = (props) => {
  const memb = props.members.map((eachMember, index) => {
    return <li key={index}>{eachMember}</li>;
  });

  return (
    <div>
      <h2> {props.name}</h2>
      <i classname={props.f}></i>
      <ul>{memb}</ul>
    </div>
  );
};
export default Club;
