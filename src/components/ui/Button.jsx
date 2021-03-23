function Button({ text, onClick, className = "btn-secondary" }) {
  return (
    <button className={`btn  mx-1 ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
