import BlogList from "./BlogList";
import IBlog from "./service/interface";
import { BlogData } from "./service/BlogData";
export default function Blog() {
  return (
    <div className="container">
      <div className="content">
        <ul>
        {BlogData.map((data: IBlog) => (
            <BlogList key={data.id} data={data} />
          ))}
        </ul>
      </div>
    </div>
  );
}
