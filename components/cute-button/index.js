export default function CuteButton(props) {
  return (
    <button onClick={props.onClick} className="cute-button">
      {props.title}
    </button>
  )
}