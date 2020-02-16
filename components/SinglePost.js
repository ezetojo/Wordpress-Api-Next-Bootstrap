import style from "./SinglePost.module.css";
import Link from "next/link";

function renderHtml(myHtmlData) {
  return { __html: myHtmlData };
}

export default function SinglePost(props) {
  return (
    <div>
      <div className={style.card + " card position-relative mb-4 border-0"}>
        <Link href="/posts/[slug]" as={`/posts/${props.postData.slug}`}>
          <a className="card-img-overlay"></a>
        </Link>
        <div className="card-body">
          <h3
            className="card-title"
            dangerouslySetInnerHTML={renderHtml(props.postData.title.rendered)}
          ></h3>
          <div
            dangerouslySetInnerHTML={renderHtml(
              props.postData.excerpt.rendered
            )}
          />
        </div>
      </div>
    </div>
  );
}
