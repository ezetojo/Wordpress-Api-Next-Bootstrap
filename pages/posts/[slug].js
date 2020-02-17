import Head from "next/head";
import Layout from "../../components/MyLayout";
import fetch from "isomorphic-unfetch";

function renderHtml(myHtmlData) {
  return { __html: myHtmlData };
}

const Post = props => (
  <Layout>
    <Head>
      <title
        dangerouslySetInnerHTML={renderHtml(props.post.title.rendered)}
      ></title>
    </Head>
    <h4
      className="font-weight-bolder text-uppercase mb-4"
      dangerouslySetInnerHTML={renderHtml(props.post.title.rendered)}
    ></h4>
    <div dangerouslySetInnerHTML={renderHtml(props.post.content.rendered)} />
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { slug } = context.query;
  const res = await fetch(
    "https://techcrunch.com/wp-json/wp/v2/posts?slug=" + slug
  );
  const data = await res.json();
  const post = await data[0];

  return { post };
};

export default Post;
