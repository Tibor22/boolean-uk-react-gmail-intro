import HeaderLeft from "./HeaderLeft.js";
import Search from "./Search.js";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <HeaderLeft />
      <Search />
    </header>
  );
}
