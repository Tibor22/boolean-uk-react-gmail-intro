export default function ListItem(props) {
  console.log(props);
  return (
    <li className={`item ${props.class}`}>
      <span className="label">{props.label}</span>
      <span className="count">{props.count}</span>
    </li>
  );
}
