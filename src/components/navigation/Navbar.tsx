import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center bg-gray-800 text-white px-6 py-3 shadow-md">
      {/* Logo + Linkovi */}
      <div className=" flex items-center space-x-6">
        <div className="w-52 flex items-center space-x-2">
          <img src="/vite.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">eParty</span>
        </div>

        {/* Links lijevo */}
        <div className="flex space-x-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `px-3 py-1 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-900 font-bold" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `px-3 py-1 rounded hover:bg-gray-700 ${
                isActive ? "bg-gray-900 font-bold" : ""
              }`
            }
          >
            Analytics
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
