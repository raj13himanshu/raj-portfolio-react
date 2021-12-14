import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "love to do Coding",
          "Web-Developer/Designer",
          "User-Interface Designer",
          "Responsive web Developer",
          "Self taught Learner",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
