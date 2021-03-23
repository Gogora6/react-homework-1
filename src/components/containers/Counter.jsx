import { useState } from "react";
import Button from "../ui/Button";

const Counter = (props) => {
  const [counter, setCounter] = useState(props.defaultCounter);

  return (
    <div>
      <h3>Counter Value : {counter}</h3>
      <Button text="+ 1" onClick={() => setCounter(counter + 1)} />
      <Button text="+ 5" onClick={() => setCounter(counter + 5)} />
      <Button text="+ 100" onClick={() => setCounter(counter + 100)} />
      <Button text="- 100" onClick={() => setCounter(counter - 100)} />
      <Button text="- 5" onClick={() => setCounter(counter - 5)} />
      <Button text="- 1" onClick={() => setCounter(counter - 1)} />
    </div>
  );
};

export default Counter;
