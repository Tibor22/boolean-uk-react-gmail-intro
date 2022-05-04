import ListItem from "./ListItem";
import "./LeftMenu.css";

export default function LeftMenu() {
  return (
    <nav className="left-menu">
      <ul className="inbox-list">
        <ListItem class="active" label="Inbox" count="3" />
        <ListItem class="" label="Starred" count="2" />
        <li className="item toggle">
          <label htmlFor="hide-read">Hide read</label>
          <input id="hide-read" type="checkbox" checked={false} />
        </li>
      </ul>
    </nav>
  );
}
