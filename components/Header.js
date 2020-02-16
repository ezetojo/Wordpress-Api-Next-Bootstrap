import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import DarkModeToggle from "./DarkModeToggle";
import NextNprogress from "nextjs-progressbar";
import Menu from "./Menu.js";
import useDarkMode from "use-dark-mode";

function isCurrent(path) {
  const router = useRouter();
  if (router.pathname === path) {
    return true;
  }
  return;
}

const openNav = event => {
  event.preventDefault();
  document.getElementById("menuOverlay").style.display = "block";
  setTimeout(() => {
    document.getElementById("menuOverlay").style.opacity = "1";
    document.getElementById("mainNav").style.transform = "translateX(0px)";
    document.getElementById("closeBtn").style.transform = "translateX(100%)";
  }, 0);
};

export default function Header() {
  return (
    <div>
      <Head>
        <title>Wordpress Api Next Bootstrap</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <NextNprogress height="5" color="#0056b3" />
      <Menu />
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              aria-label="Toggle navigation"
              onClick={openNav}
            >
              <svg
                id="toggleBtn"
                class="bi bi-list"
                width="2em"
                height="2em"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 13.5A.5.5 0 015 13h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-4A.5.5 0 015 9h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5zm0-4A.5.5 0 015 5h10a.5.5 0 010 1H5a.5.5 0 01-.5-.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav mx-auto">
                <li className={"nav-item " + (isCurrent("/") ? "active" : "")}>
                  <Link href="/">
                    <a
                      className={
                        "nav-link " + (isCurrent("/") ? "disabled" : "")
                      }
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li
                  className={
                    "nav-item " + (isCurrent("/categories") ? "active" : "")
                  }
                >
                  <Link href="/categories">
                    <a
                      className={
                        (isCurrent("/categories") ? "disabled" : "") +
                        " nav-link"
                      }
                    >
                      Categories
                    </a>
                  </Link>
                </li>
                <li
                  className={
                    "nav-item " + (isCurrent("/posts") ? "active" : "")
                  }
                >
                  <Link href="/posts">
                    <a
                      className={
                        (isCurrent("/posts") ? "disabled" : "") + " nav-link"
                      }
                    >
                      Posts
                    </a>
                  </Link>
                </li>
                <li
                  className={
                    "nav-item " + (isCurrent("/about") ? "active" : "")
                  }
                >
                  <Link href="/about">
                    <a
                      className={
                        (isCurrent("/about") ? "disabled" : "") + " nav-link"
                      }
                    >
                      About
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-nav ml-auto">
              <DarkModeToggle />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
