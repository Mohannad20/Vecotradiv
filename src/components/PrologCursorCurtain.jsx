import React, { useState } from "react";
import CurtainProlog from "./CurtainProlog";
import BrickCursor from "./BrickCursor";

const PrologCursorCurtain = ({ onFinish }) => {
  const [startLift, setStartLift] = useState(false);

  return (
    <>
      <CurtainProlog startLift={startLift} onFinish={onFinish} />
      <BrickCursor onCompleteShrink={() => setStartLift(true)} />
    </>
  );
};

export default PrologCursorCurtain;
