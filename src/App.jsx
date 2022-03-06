import React, { useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";
// reactのコンポーネントだよと示す

const App = () => {
  // const onClickButton = () => alert();

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const [num, setNum] = useState(0);

  return (
    <>
      <ColorfullMessage color="pink">お元気ですか</ColorfullMessage>

      {/* <ColorfullMessage color="blue" message="元気です" /> */}
      <ColorfullMessage color="blue">元気です</ColorfullMessage>

      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
