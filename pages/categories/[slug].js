import Head from "next/head";
import Layout from "../../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

function renderHtml(myHtmlData) {
  return { __html: myHtmlData };
}

const Category = props => (
  <Layout>
    <Head>
      <title dangerouslySetInnerHTML={renderHtml(props.category.name)}></title>
    </Head>
    <h4
      className="font-weight-bolder text-uppercase mb-4"
      dangerouslySetInnerHTML={renderHtml(props.category.name)}
    ></h4>
    <ul className="list-unstyled">
      {props.posts.map(post => (
        <li key={post.id}>
          <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
            <a dangerouslySetInnerHTML={renderHtml(post.title.rendered)}></a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Category.getInitialProps = async function(context) {
  const { slug } = context.query;
  const catRes = await fetch(
    "https://techcrunch.com/wp-json/wp/v2/categories?_fields=id,slug,name&slug=" +
      slug
  );
  const catData = await catRes.json();
  const category = await catData[0];

  const postRes = await fetch(
    "https://techcrunch.com/wp-json/wp/v2/posts?category=" + catData.id
  );

  const posts = await postRes.json();

  return { category, posts };
};

export default Category;
