import { useState } from "react";
import Button from "../ui/Button";

const Theme = ({ defaultBackgroundColor, defaultTextColor }) => {
  const [backgroundColor, setBackgroundColor] = useState(
    defaultBackgroundColor
  );
  const [textColor, setTextColor] = useState(defaultTextColor);
  return (
    <>
      <div style={{ background: backgroundColor, color: textColor }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          convallis lacus ac dolor efficitur gravida. Etiam dignissim erat vel
          tempus tempor. Nunc eu mi in odio luctus pretium. Sed non felis
          feugiat, placerat lorem id, lobortis enim. Donec iaculis metus magna,
          eget egestas ligula dapibus nec. Sed aliquam venenatis bibendum. Donec
          sed tincidunt arcu. Ut sed luctus lacus, at lacinia ligula. Aliquam
          gravida nibh at volutpat tincidunt. Sed eget pharetra leo. Cras
          pellentesque erat sit amet ipsum convallis aucto
        </p>
      </div>

      <br />
      <br />

      <Button
        text="Black background"
        className="btn-dark"
        onClick={function () {
          setBackgroundColor("black");
          setTextColor("white");
        }}
      />
      <Button
        text="red background"
        className="btn-danger"
        onClick={function () {
          setBackgroundColor("red");
          setTextColor("black");
        }}
      />
      <Button
        text="Blue background"
        className="btn-primary"
        onClick={function () {
          setBackgroundColor("blue");
          setTextColor("white");
        }}
      />
      <Button
        text="Grey background"
        className="btn-secondary"
        onClick={function () {
          setBackgroundColor("grey");
          setTextColor("white");
        }}
      />
      <Button
        text="Green background"
        className="btn-success"
        onClick={function () {
          setBackgroundColor("green");
          setTextColor("black");
        }}
      />
      <Button
        text="Yellow background"
        className="btn-warning"
        onClick={function () {
          setBackgroundColor("yellow");
          setTextColor("black");
        }}
      />
    </>
  );
};

export default Theme;
