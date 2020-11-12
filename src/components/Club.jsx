import React from "react";

function Club(props) {
  /* const player = props.clubs.members.map((player, i) => {
    return <li key={i}>{player.members}</li>;
  }); */
  return (
    <div>
      <h2>{props.list}</h2>
      <ul></ul>
    </div>
  );
}

export default Club;
