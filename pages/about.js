import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Pills from "../components/Pills.js";
import Layout from "../components/MyLayout.js";

const About = props => (
  <Layout>
    <Head>
      <title>ABOUT</title>
    </Head>
    <h4 className="font-weight-bolder text-uppercase mb-4">ABOUT</h4>
    <h5 className="mb-4">
      Made by{" "}
      <a href="https://github.com/ezetojo" target="new">
        Eze Tojo
      </a>{" "}
      using
    </h5>
    <div className="row">
      <Pills items={props.items} />
    </div>
  </Layout>
);

About.getInitialProps = async function() {
  const items = [
    {
      name: "HTML",
      bgColor: "#E34F26",
      color: "black",
      icon: "html5.svg"
    },
    {
      name: "CSS",
      bgColor: "#1572B6",
      color: "black",
      icon: "css3.svg"
    },
    {
      name: "Javascript",
      bgColor: "#F7DF1E",
      color: "black",
      icon: "javascript.svg"
    },
    {
      name: "WordPress",
      url: ["developer.wordpress.org/rest-api/"],
      icon: "wordpress.svg",
      color: "white",
      bgColor: "#21759B"
    },
    {
      name: "NEXT.js",
      url: ["nextjs.org"],
      icon: "next-dot-js.svg",
      color: "white",
      bgColor: "#000000"
    },
    {
      name: "Bootstrap",
      url: ["getbootstrap.com"],
      bgColor: "#563D7C",
      color: "white",
      icon: "bootstrap.svg"
    },
    {
      name: "GitHub",
      url: ["github.com"],
      bgColor: "#181717",
      color: "white",
      icon: "github.svg"
    },
    {
      name: "stackoverflow",
      url: ["stackoverflow.com"],
      bgColor: "#FE7A16",
      color: "white",
      icon: "stackoverflow.svg"
    },
    {
      name: "ZEIT Now",
      url: ["zeit.co"],
      bgColor: "#000",
      color: "white",
      icon: "zeit.svg"
    },
    {
      name: "VS Code",
      url: ["code.visualstudio.com"],
      bgColor: "#007ACC",
      color: "white",
      icon: "visualstudiocode.svg"
    },
    {
      name: "TechCrunch",
      url: ["techcrunch.com"],
      bgColor: "linear-gradient(315deg,#00d301,#36c275 50.5%,#00a562)",
      color: "white",
      icon: "techcrunch.svg"
    },
    {
      name: "Simple Icons",
      url: ["simpleicons.org"],
      bgColor: "#111111",
      color: "white",
      icon: "simpleicons.svg"
    }
  ];

  return {
    items
  };
};

export default About;
