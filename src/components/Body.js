import React from "react";

export default props => (
  <div>
    <p className="App-intro">{props.text}</p>
    <p className="App-intro">{props.text2}</p>
    <p className="App-intro">{props.myFunc(1, 2)}</p>
  </div>
);

export const Body2 = () => (
  <div>
    <div>hi</div>
  </div>
);

export const Body3 = () => (
  <div>
    <div>hi</div>
  </div>
);
