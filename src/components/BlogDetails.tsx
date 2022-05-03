import { useParams } from "react-router-dom";
import { BlogData } from "./service/BlogData";

export default function BlogDetails() {
  const { id } = useParams();
  const data = BlogData.filter((data) => data.id === id);
  console.log(data);
  return (
    <div className="container">
      <div className="content">
        <ul>
          <li>
            <div className="info">
              <h6>{data[0].createdBy}</h6>
              <small>{data[0].dateCreated}</small>
            </div>

            <p>{data[0].title}</p>
            <img src={data[0].cover} />
            <p className="body">
             {data[0].body}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
