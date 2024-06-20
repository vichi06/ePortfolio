import "./index.css";

function Button({ children, onClick }) {
  return (
    <div onClick={onClick} className="Button">
      {children}
    </div>
  );
}

export default Button;
