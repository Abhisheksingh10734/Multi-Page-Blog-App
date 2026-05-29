import { Logo } from './Left/Logo';
import { RightNav } from './Right/RightNav';

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 px-8 h-14 flex items-center justify-between sticky top-0 z-10">
      <Logo />
      <RightNav />
    </nav>
  );
};