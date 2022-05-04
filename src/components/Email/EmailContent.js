import EmailBody from "./EmailBody.js";
import EmailContentHeader from "./EmailContentHeader.js";
import EmailActions from "./EmailActions.js";
import Title from "../Title.js";

export default function EmailContent() {
  return (
    <article className="email-content">
      <Title title="Welcome to Flaticon" />
      <EmailContentHeader />
      <EmailBody />
      <EmailActions />
    </article>
  );
}
