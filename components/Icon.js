export default function Icon(props) {
  return (
    <img
      src={"../" + props.icon}
      className={props.classes}
      style={{ ...props.style }}
    ></img>
  );
}
