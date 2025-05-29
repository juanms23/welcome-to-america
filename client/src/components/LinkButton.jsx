import { Link } from "react-router-dom";

function LinkButton({ to, children, className = "", ...props }) {
  return (
    <Link
      to={to}
      className={`block min-w-[12rem] px-4 py-4 bg-teal-600 text-white rounded-xl text-xl font-semibold flex items-center justify-center text-center shadow hover:bg-teal-800 transition ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}1

export default LinkButton;