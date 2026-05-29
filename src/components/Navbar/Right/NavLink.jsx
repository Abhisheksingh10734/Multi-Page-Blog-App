export const NavLink = () => {
  return (
    <div className="flex items-center gap-8">
      <li className="list-none text-xs font-medium uppercase tracking-widest text-gray-500 cursor-pointer hover:text-gray-900 transition-colors">
        Home
      </li>
      <li className="list-none text-xs font-medium uppercase tracking-widest text-gray-500 cursor-pointer hover:text-gray-900 transition-colors">
        Category
      </li>
    </div>
  );
};