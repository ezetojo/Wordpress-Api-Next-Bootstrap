import Icon from "../components/Icon.js";

export default function Pills(props) {
  return (
    <>
      {props.items.map((item, index) => {
        return (
          <div className="col-12 col-md-6 mb-4" key={index}>
            <div className="card h-100" style={{ background: item.bgColor }}>
              <div className="card-body overflow-hidden">
                <div className="row h-100 justify-content-center align-items-center">
                  <div className="col-3">
                    {item.icon ? (
                      <Icon
                        style={{ width: "50px" }}
                        classes={"d-block mx-auto"}
                        icon={item.icon}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-9">
                    <h3
                      className={
                        "card-title mb-0 font-weight-bold text-" + item.color
                      }
                    >
                      {item.name}
                    </h3>
                    {item.url
                      ? item.url.map((url, index) => {
                          return (
                            <a
                              className="text-light text-nowrap d-block mb-0"
                              href={"//" + url}
                              key={index}
                              target="new"
                            >
                              {url}
                            </a>
                          );
                        })
                      : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
