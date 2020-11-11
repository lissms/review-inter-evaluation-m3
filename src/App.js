import React from "react";
import clubs from "./data/clubs.js";
import ClubList from "./components/ClubList";

console.log("clubs", clubs);
const App = () => {
  return (
    <div>
      <ClubList clubs={clubs} />
    </div>
  );
};

export default App;
