import ActionButtons from "./ActionButtons";
import Logo from "./Logo";
import { NavLinks } from "./NavLinks";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 border-b h-[100px]">
      <Logo />
      <NavLinks />
      <ActionButtons />
    </div>
  );
}
