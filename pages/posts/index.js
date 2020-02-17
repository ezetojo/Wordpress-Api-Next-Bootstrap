import Head from "next/head";
import Layout from "../../components/MyLayout";
import fetch from "isomorphic-unfetch";
import SinglePost from "../../components/SinglePost";

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
