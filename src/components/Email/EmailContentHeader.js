import Icons from "../Image/Icons.js";
import EmailInfo from "./EmailInfo.js";
import "./EmailContentHeader.css";
export default function EmailContentHeader() {
  return (
    <header className="email-content--header">
      <div className="avatar"></div>
      <EmailInfo />
      <div className="date-info">
        <p>17 March 2021, 09:33</p>
      </div>
      <div className="email-action-icons">
        <Icons name="actions" />
      </div>
    </header>
  );
}
