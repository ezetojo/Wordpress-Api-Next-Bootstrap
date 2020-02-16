import Header from "./Header";

export default function Layout(props) {
  return (
    <div>
      <Header />
      <div className="py-3">
        <div className="container">
          <div className="row">
            <div className="col-12">{props.children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
