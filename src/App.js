import React from "react";
import ClubList from "./components/ClubList";
import clubs from "./data/clubs.js";

function App(props) {
  return (
    <div>
      <ClubList clubs={clubs} />
    </div>
  );
}

export default App;
