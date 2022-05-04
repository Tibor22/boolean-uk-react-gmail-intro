import EmailToolbar from ".//EmailToolbar.js";
import EmailContent from "./EmailContent.js";

export default function EmailView() {
  return (
    <main className="email-view">
      <EmailToolbar />
      <EmailContent />
    </main>
  );
}
