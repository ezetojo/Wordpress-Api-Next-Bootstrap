import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";

const Index = props => (
  <Layout>
    <h4 className="font-weight-bolder text-uppercase mb-4">
      Wordpress Api Next Bootstrap
    </h4>
    <p>ADVISOR: This is an experiment.</p>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch(
    "https://techcrunch.com/wp-json/wp/v2/categories?orderby=name&hide_empty=true&per_page=100&_fields=id,slug,name"
  );
  const categories = await res.json();

  return {
    categories: categories
  };
};

export default Index;
