import Counter from "../../components/containers/Counter";
import Greeting from "../../components/containers/Greeting";
import Theme from "../../components/containers/Theme";
import {
  defaultBackgroundColor,
  defaultCounter,
  defaultTextColor,
} from "../../utils/constants";

function Main(props) {
  return (
    <div>
      <Greeting
        greetingText="Hello Jano!!"
        description="Homework N1.  Student: Lasha Gogorishvili"
      />
      <br />
      <Counter defaultCounter={defaultCounter} />
      <br />
      <Theme
        defaultBackgroundColor={defaultBackgroundColor}
        defaultTextColor={defaultTextColor}
      />
    </div>
  );
}

export default Main;
