import IBlog from "./service/interface";
import { Link } from "react-router-dom";

export default function BlogList(props: { data: IBlog }) {
  const { data } = props;
  return (
    <li>
      <div className="info">
        <h6>{data.createdBy}</h6>
        <small>{data.dateCreated}</small>
      </div>

      <Link to={`/${data.id}`}>
        <p>{data.title}</p>
      </Link>
    </li>
  );
}
