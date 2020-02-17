import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "../components/Icon.js";
import style from "./Menu.module.css";

function closeNav(event) {
  event.preventDefault();
  document.getElementById("sideNav").style.transform = "translateX(0px)";
  document.getElementById("closeBtn").style.transform = "translateX(-1rem)";
  document.getElementById("menuOverlay").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("menuOverlay").style.display = "none";
  }, 500);
}

function isCurrent(path) {
  const router = useRouter();
  if (router.pathname === path) {
    return true;
  }
  return;
}

export default function Menu() {
  return (
    <>
      <div
        className={style.menuOverlay}
        id="menuOverlay"
        onClick={closeNav}
      ></div>
      <div className={style.sidebar} id="sideNav">
        <a href="#" className={style.closebtn} onClick={closeNav} id="closeBtn">
          <Icon
            icon="x.svg"
            className="closeBtn"
            style={{ background: "#fff" }}
          />
        </a>
        <Link href="/">
          <a className={"nav-link " + (isCurrent("/") ? "disabled" : "")}>
            Home
          </a>
        </Link>
        <Link href="/categories">
          <a
            className={
              (isCurrent("/categories") ? "disabled" : "") + " nav-link"
            }
          >
            Categories
          </a>
        </Link>
        <Link href="/posts">
          <a className={(isCurrent("/posts") ? "disabled" : "") + " nav-link"}>
            Posts
          </a>
        </Link>
        <Link href="/about">
          <a className={(isCurrent("/about") ? "disabled" : "") + " nav-link"}>
            About
          </a>
        </Link>
      </div>
    </>
  );
}
