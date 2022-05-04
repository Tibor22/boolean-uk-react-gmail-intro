import Image from "../Image/Image.js";
import flaticonWelcomeImage from "../../assets/images/flaticon-welcome-image.png";
import "./EmailBody.css";
export default function EmailBody() {
  return (
    <section className="email-body">
      <div className="content">
        <Image src={flaticonWelcomeImage} alt="Flaticon welcome message" />
      </div>
    </section>
  );
}
