import Head from "next/head";
import Layout from "../../components/MyLayout";
import fetch from "isomorphic-unfetch";
import SinglePost from "../../components/SinglePost";

function renderHtml(myHtmlData) {
  return { __html: myHtmlData };
}

const PostIndex = props => (
  <Layout>
    <Head>
      <title>POSTS</title>
    </Head>
    <h4 className="font-weight-bolder text-uppercase mb-4">
      POSTS <small>[THE LATEST]</small>
    </h4>
    {props.posts.map(post => (
      <SinglePost postData={post} key={post.id} />
      // <div
      //   key={post.id}
      //   className={style.card + " card position-relative mb-4 border-0"}
      // >
      //   <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
      //     <a className="card-img-overlay"></a>
      //   </Link>
      //   <div className="card-body">
      //     <h4
      //       className="card-title"
      //       dangerouslySetInnerHTML={renderHtml(post.title.rendered)}
      //     ></h4>
      //     <div dangerouslySetInnerHTML={renderHtml(post.excerpt.rendered)} />
      //   </div>
      // </div>
    ))}
    <p>
      Read all on{" "}
      <a href="https://techcrunch.com" target="new">
        techcrunch.com
      </a>
    </p>
  </Layout>
);

PostIndex.getInitialProps = async function() {
  const res = await fetch(
    "https://techcrunch.com/wp-json/wp/v2/posts?orderBy=date&limit=10&_fields=id,slug,title,excerpt"
  );
  const posts = await res.json();

  return {
    posts: posts
  };
};

export default PostIndex;
