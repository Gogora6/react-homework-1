const Greeting = ({ greetingText, description }) => {
  return (
    <div>
      <h1>{greetingText}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Greeting;
