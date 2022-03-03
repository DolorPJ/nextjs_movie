import Link from "next/link";

function Header() {
  return (
  <Link href={"/"}>
    <div>
      <h1 className="header_watch">
        watch<span className="header_me">me</span>
      </h1>
    </div>
  </Link>
  );
}

export default Header;
