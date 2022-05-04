import backArrow from "../../assets/icons/back-arrow.png";
import downloadButton from "../../assets/icons/download-button.png";
import rubbishButton from "../../assets/icons/rubbish-bin-delete-button.png";
import rateStarButton from "../../assets/icons/rate-star-button.png";
export default function Icons({ name }) {
  const toolbarIcons = [
    { src: backArrow, alt: "reply button" },
    { src: downloadButton, alt: "archive button" },
    { src: rubbishButton, alt: "rubbish button" },
  ];
  const actionIcons = [
    { src: backArrow, alt: "reply button" },
    { src: rateStarButton, alt: "star button" },
    { src: rubbishButton, alt: "rubbish button" },
  ];

  console.log(name);
  return (
    <ul>
      {name === "toolbar" &&
        toolbarIcons.map((icon) => (
          <li key={icon.src}>
            <img className="icon" src={icon.src} alt={icon.alt} />
          </li>
        ))}
      {name === "actions" &&
        actionIcons.map((icon) => (
          <li key={icon.src}>
            <img className="icon" src={icon.src} alt={icon.alt} />
          </li>
        ))}
    </ul>
  );
}
