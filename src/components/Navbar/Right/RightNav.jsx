import { NavLink } from './NavLink';
import { ThemeBtn } from './ThemeBtn';

export const RightNav = () => {
  return (
    <div className="flex items-center gap-8">
      <NavLink />
      <ThemeBtn />
    </div>
  );
};