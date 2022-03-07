import React, { useEffect, useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";
// reactのコンポーネントだよと示す

const App = () => {
  // console.log("最初");
  // const onClickButton = () => alert();

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }

    console.log("useEffect");
  }, [num]);

  return (
    <>
      <ColorfullMessage color="pink">お元気ですか</ColorfullMessage>

      {/* <ColorfullMessage color="blue" message="元気です" /> */}
      <ColorfullMessage color="blue">元気です</ColorfullMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>!(^^)!</p>}
    </>
  );
};

export default App;
