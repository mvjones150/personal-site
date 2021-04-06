export default function CuteButton(props) {
  return (
    <button
      onClick={props.onClick}
      className="cute-button"
      type="button"
    >
      {props.title}
    </button>
  );
}
