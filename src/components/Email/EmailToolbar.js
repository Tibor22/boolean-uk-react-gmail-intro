import Icons from "../Image/Icons.js";
import "./EmailToolbar.css";

export default function EmailToolbar() {
  return (
    <nav className="email-toolbar">
      <Icons name="toolbar" />
      <div className="space"></div>
      <div>
        <p>1 of 25</p>
        <button>&lt;</button>
        <button>&gt;</button>
      </div>
    </nav>
  );
}
