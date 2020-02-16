import Head from "next/head";
import Layout from "../../components/MyLayout";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

function renderHtml(myHtmlData) {
  return { __html: myHtmlData };
}

const CategoryIndex = props => (
  <Layout>
    <Head>
      <title>CATEGORIES</title>
    </Head>
    <h4 className="font-weight-bolder mb-4">CATEGORIES</h4>
    <ul className="list-unstyled" id="category-list">
      {props.categories.map(category => (
        <li key={category.id}>
          <Link href="/categories/[slug]" as={`/categories/${category.slug}`}>
            <a dangerouslySetInnerHTML={renderHtml(category.name)}></a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>
      {`
        #category-list {
          padding-left: 1rem;
          column-count: 1;
          column-gap: 2rem;
        }
        @media (min-width: 768px) {
          #category-list {
            column-count: 2;
          }
        }
        @media (min-width: 992px) {
          #category-list {
            column-count: 3;
          }
        }
        @media (min-width: 1200px) {
          #category-list {
            column-count: 4;
          }
        }
        @media (min-width: 1600px) {
          #category-list {
            column-count: 5;
          }
        }
      `}
    </style>
  </Layout>
);

CategoryIndex.getInitialProps = async function() {
  const res = await fetch(
    "https://techcrunch.com/wp-json/wp/v2/categories?orderby=name&hide_empty=true&per_page=100&_fields=id,slug,name"
  );
  const categories = await res.json();

  return {
    categories: categories
  };
};

export default CategoryIndex;
