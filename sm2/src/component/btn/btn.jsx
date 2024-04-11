import { Link } from "react-router-dom";

export default function Btn({title, id}) {
  return (
    <Link to={`${id}`} className="btn">{title}</Link>
  );
}
